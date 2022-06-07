import React, { useState, useEffect } from "react";
import axios from "axios";

import useContextValues from "../hooks/useContextValues";

import { useNavigate } from "react-router-dom";

import BarberCard from "../components/BarberCard";

const API_URL = "http://localhost:5000/barbers";

// https://codepen.io/gaearon/pen/yzMaBd <-- portal

const BarbersList = () => {
  console.log("BarbersList");

  const [barbers, setBarbers] = useState([]);
  console.log(barbers);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await axios.get(API_URL);
        setBarbers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBarbers();
    return () => console.log("Cancel axios requiest");
  }, []);

  const renderedBarbers = barbers.map((barber) => (
    <BarberCard
      key={barber.id}
      id={barber.id}
      firstname={barber.firstname}
      lastname={barber.lastname}
      review={barber.review}
      price={barber.price}
      reviewamount={barber.reviewamount}
      onClick={() => navigate(`/barbers/${barber.id}`)}
    />
  ));

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Available Barbers
      </h2>
      {renderedBarbers}
    </>
  );
};

export default BarbersList;
