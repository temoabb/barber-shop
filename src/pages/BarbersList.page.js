import React, { useState } from "react";
import axios from "axios";

import useContextValues from "../hooks/useContextValues";

import { useNavigate } from "react-router-dom";

// import { StyledModal } from "../components/styles/Modal.styled";
import Modal from "../components/Modal";

import BarberCard from "../components/BarberCard";

const API_URL = "http://localhost:5000/barbers";

// https://codepen.io/gaearon/pen/yzMaBd <-- portal

const BarbersList = () => {
  console.log("BarbersList");

  const { loggedIn } = useContextValues();

  const [showModal, setShowModal] = useState("");
  const [barbers, setBarbers] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
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

  const modal = showModal ? (
    <Modal>
      <img src="" alt="" />
      <div>
        <h1>
          {} {}
        </h1>
      </div>
    </Modal>
  ) : (
    ""
  );

  const handleReserveVisit = (visitData) => {
    if (!loggedIn) {
      console.log("Firstly you have to login to reserve your visit");
      navigate("/login");
    } else {
      setShowModal({ barberData: visitData });
    }
  };

  const renderedBarbers = barbers.map((barber) => (
    <BarberCard {...barber} onReserveVisit={handleReserveVisit} />
  ));

  return (
    <>
      {modal}
      {renderedBarbers}
    </>
  );
};

export default BarbersList;
