import axios from "axios";

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import useContextValues from "../hooks/useContextValues";

import { StyledButton } from "../components/styles/Button.styled";
import { StyledBookingCard } from "../components/styles/BarberCard.styled";
import { StyledModalForm } from "../components/styles/Modal.styled";

import {
  StyledFormControl,
  StyledLabel,
} from "../components/styles/Form.styled";

import { useForm } from "react-hook-form";

import Modal from "../components/Modal";

const BOOKINGS_URL = "http://localhost:5000/bookings";
const BARBERS_URL = "http://localhost:5000/barbers";

function MyBookings() {
  const { email, loggedIn } = useContextValues();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [myBookings, setMyBookings] = useState([]);
  const [barberEmail, setBarberEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successfullyReviewed, setSuccessfullyReviewed] = useState(null);

  useEffect(() => {
    const fetchMyBookings = async () => {
      const response = await axios.get(`${BOOKINGS_URL}?clientEmail=${email}`);
      setMyBookings(response.data);
    };

    if (email) fetchMyBookings();
  }, [email]);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  const handleCloseModal = () => {
    setBarberEmail("");
    setSuccessfullyReviewed(null);
    setShowModal(false);
  };

  const handleWriteReview = async () => {
    const barber = await axios.get(`${BARBERS_URL}?email=${barberEmail}`);
    const barberData = barber.data[0];

    if (barberData.reviewedby.includes(email)) {
      setSuccessfullyReviewed(false);
      setBarberEmail("");
      return;
    }

    const { review } = getValues();

    const updatedBarberData = { ...barberData };

    const previousReviewsSum = updatedBarberData.reviewssum;
    const previousReviewAmount = updatedBarberData.reviewamount;

    updatedBarberData.reviewssum = +previousReviewsSum + Number(review);
    updatedBarberData.reviewamount = +previousReviewAmount + 1;

    updatedBarberData.reviewedby = [...updatedBarberData.reviewedby, email];

    await axios.put(BARBERS_URL + `/${barberData.id}`, updatedBarberData);
    setSuccessfullyReviewed(true);
  };

  const reviewForm = (
    <StyledModalForm onSubmit={handleSubmit(handleWriteReview)}>
      <StyledFormControl>
        <StyledLabel>Enter your review</StyledLabel>
        <input
          {...register("review", { required: true, min: 1, max: 5 })}
          type="number"
        />
        {errors.review && (
          <small>Review must not be empty or more than 5, or less than 0</small>
        )}
      </StyledFormControl>
      <section>
        <StyledButton
          bg="#ff0099"
          color="#fff"
          type="button"
          onClick={handleCloseModal}
        >
          Cancel
        </StyledButton>
        <StyledButton color="green" type="submit">
          Add
        </StyledButton>
      </section>
    </StyledModalForm>
  );

  const successReviewMessage = (
    <>
      <h2>Congratulations, Successful booking ^_^</h2>
      <StyledButton color="#ff0099" onClick={handleCloseModal}>
        Back to bookings
      </StyledButton>
    </>
  );

  const failedReviewMessage = (
    <>
      <h2 style={{ textAlign: "center", color: "red" }}>
        Can not add a review with the same email to the same barber twice!
      </h2>
      <StyledButton color="#ff0099" onClick={handleCloseModal}>
        Back to bookings
      </StyledButton>
    </>
  );

  const modal = showModal ? (
    <Modal>
      {successfullyReviewed === null
        ? reviewForm
        : successfullyReviewed === false
        ? failedReviewMessage
        : successReviewMessage}
    </Modal>
  ) : (
    ""
  );

  const handleShowModal = (barberEmail) => {
    setShowModal(true);
    setBarberEmail(barberEmail);
  };

  return (
    <>
      {modal}
      {email && (
        <p style={{ margin: "20px 0", textAlign: "center" }}>
          <b>
            <i>{email}</i>
          </b>
          's bookings:
        </p>
      )}
      {myBookings.map((booking) => (
        <StyledBookingCard key={booking.id}>
          <div>
            <p>
              <b>Barber</b> <br /> {booking.barberEmail}
            </p>
            <p>
              <b>Day</b> <br />
              {booking.bookingDate}
            </p>
            <p>
              <b>Time</b> <br /> {booking.bookingTime}
            </p>
          </div>
          <StyledButton
            onClick={handleShowModal.bind(null, booking.barberEmail)}
            bg="#ebfbff"
          >
            REVIEW
          </StyledButton>
        </StyledBookingCard>
      ))}
    </>
  );
}

export default MyBookings;
