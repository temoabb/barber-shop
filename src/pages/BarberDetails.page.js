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

const API_URL = "http://localhost:5000/barbers";

const BarberDetails = () => {
  console.log("BarberDetails");

  const { loggedIn } = useContextValues();

  const {
    register,
    setError,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  const [barber, setBarber] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("BarberDetails useEffect");
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

  console.log(showModal);
  const submitHandler = () => {};

  const handleCloseModal = () => setShowModal(false);

  const modalHeading = (
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

  const modal = showModal ? (
    <Modal onCloseModal={handleCloseModal}>
      <StyledModalForm onSubmit={handleSubmit(submitHandler)}>
        {modalHeading}
        <StyledFormControl>
          <StyledLabel>Please choose a day</StyledLabel>
          <input {...register("visitDay", { required: true })} type="date" />
        </StyledFormControl>
        <StyledFormControl>
          <StyledLabel>Please choose an appropriate time:</StyledLabel>
          <input {...register("visitTime", { required: true })} type="time" />
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
    </Modal>
  ) : (
    ""
  );

  const handleReserveVisit = () => {
    if (!loggedIn) {
      console.log("Firstly you have to login to reserve your visit");
      navigate("/login");
    } else {
      console.log("here");
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
