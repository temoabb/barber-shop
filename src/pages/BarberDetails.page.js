import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import useContextValues from "../hooks/useContextValues";

import { useForm } from "react-hook-form";

import Modal from "../components/Modal";
import BarberCard from "../components/BarberCard";

import {
  StyledModalForm,
  StyledVisitHeading,
} from "../components/styles/Modal.styled";

import {
  StyledLabel,
  StyledFormControl,
} from "../components/styles/Form.styled";

import { StyledButton } from "../components/styles/Button.styled";

const BARBERS_API_URL = "http://localhost:5000/barbers";
const BOOKINGS_API_URL = "http://localhost:5000/bookings";

const BarberDetails = () => {
  const { loggedIn, email: clientEmail } = useContextValues();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const [barber, setBarber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successfulBooking, setSuccessfulBooking] = useState(false);

  useEffect(() => {
    const fetchBarber = async () => {
      try {
        const response = await axios.get(BARBERS_API_URL + `/${params.id}`);
        setBarber(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBarber();

    return () => console.log("Cancel axios request BarberDetails");
  }, [params.id]);

  const submitHandler = () => {
    const values = getValues();

    const createNewBooking = async () => {
      try {
        await axios.post(BOOKINGS_API_URL, {
          clientEmail,
          barberEmail: barber.email,
          bookingDate: values.visitDay,
          bookingTime: values.visitTime,
        });

        setSuccessfulBooking(true);
      } catch (error) {
        console.error(error);
        setShowModal(false);
      }
    };

    createNewBooking();
  };

  const handleCloseModal = () => {
    if (successfulBooking) {
      navigate("/my-bookings");
    } else {
      setShowModal(false);
    }
  };

  const bookingModalHeading = (
    <StyledVisitHeading>
      <h2>
        You are reserving a visit to <br />
        <b>{`${barber.firstname} ${barber.lastname}`}</b>
      </h2>
      <div>
        <small>{barber.address}</small>
        <br />
        <h3>GEL {barber.price}</h3>
      </div>
    </StyledVisitHeading>
  );

  const bookingForm = (
    <StyledModalForm onSubmit={handleSubmit(submitHandler)}>
      {bookingModalHeading}
      <StyledFormControl>
        <StyledLabel>Please choose a day</StyledLabel>
        <input {...register("visitDay", { required: true })} type="date" />
        {errors.visitDay && <small>You must specify your visit DAY</small>}
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel>Please choose an appropriate time:</StyledLabel>
        <input {...register("visitTime", { required: true })} type="time" />
        {errors.visitTime && <small>You must specify your visit DATE</small>}
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
          Reserve
        </StyledButton>
      </section>
    </StyledModalForm>
  );

  const successfullyBookedMessage = (
    <>
      <h2>Congratulations, Successful booking ^_^</h2>
      <StyledButton color="#ff0099" onClick={handleCloseModal}>
        See your bookings
      </StyledButton>
    </>
  );

  const modal = showModal ? (
    <Modal onCloseModal={handleCloseModal}>
      {!successfulBooking ? bookingForm : successfullyBookedMessage}
    </Modal>
  ) : (
    ""
  );

  const handleArrangeVisit = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {modal}
      {barber && (
        <BarberCard animate {...barber} onClick={handleArrangeVisit} />
      )}
    </>
  );
};

export default BarberDetails;
