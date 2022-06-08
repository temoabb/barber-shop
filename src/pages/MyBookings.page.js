import axios from "axios";
import { useState, useEffect } from "react";

import useContextValues from "../hooks/useContextValues";
import { Navigate } from "react-router-dom";

const BOOKINGS_URL = "http://localhost:5000/bookings";

function MyBookings() {
  const { email, loggedIn } = useContextValues();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      const response = await axios.get(`${BOOKINGS_URL}?email=${email}`);
      setMyBookings(response.data);
    };

    if (email) fetchMyBookings();
  }, [email]);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {myBookings.map((booking) => (
        <h1>{booking.barberEmail}</h1>
      ))}
    </div>
  );
}

export default MyBookings;
