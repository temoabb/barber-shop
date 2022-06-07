import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import useContextValues from "../hooks/useContextValues";

import Modal from "../components/Modal";
import BarberCard from "../components/BarberCard";

const API_URL = "http://localhost:5000/barbers";

const BarberDetails = () => {
  console.log("BarberDetails");

  const { loggedIn } = useContextValues();

  const params = useParams();
  const navigate = useNavigate();

  const [barber, setBarber] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBarber = async () => {
      try {
        const response = await axios.get(API_URL + `/${params.id}`);
        setBarber(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBarber();
    return () => console.log("Cancel axios request BarberDetails");
  }, [params.id]);

  const modal = showModal ? (
    <Modal>
      <div>
        <h1>Reserving a visit:</h1>
      </div>
    </Modal>
  ) : (
    ""
  );

  const handleReserveVisit = () => {
    if (!loggedIn) {
      console.log("Firstly you have to login to reserve your visit");
      navigate("/login");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {modal}
      {barber && <BarberCard {...barber} onClick={handleReserveVisit} />}
    </>
  );
};

export default BarberDetails;
