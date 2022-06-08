import axios from "axios";
import { useState, useEffect } from "react";

import useContextValues from "../hooks/useContextValues";
import { Navigate } from "react-router-dom";

import { StyledBarberCard } from "../components/styles/BarberCard.styled";
import { StyledButton } from "../components/styles/Button.styled";

import { StyledBookingCard } from "../components/styles/BarberCard.styled";

const BOOKINGS_URL = "http://localhost:5000/bookings";

function MyBookings() {
  const { email, loggedIn } = useContextValues();
  const [myBookings, setMyBookings] = useState([]);

  console.log("Mybookings");

  useEffect(() => {
    const fetchMyBookings = async () => {
      console.log("async");
      const response = await axios.get(`${BOOKINGS_URL}?email=${email}`);
      setMyBookings(response.data);
    };

    if (email) fetchMyBookings();
  }, [email]);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
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
          <StyledButton bg="#ebfbff">REVIEW</StyledButton>
        </StyledBookingCard>
      ))}
    </>
  );
}

export default MyBookings;
