import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import useContextValues from "../hooks/useContextValues";

import {
  CLIENT_REGISTRATION_ATRRIBUTES,
  BARBER_REGISTRATION_ATTRIBUTES,
} from "../static/registrationAttributes";

const isValid = (str) => str.trim();

const BASE_URL = "http://localhost:5000";

export const useRegister = () => {
  const [isBarber, setIsBarber] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = () => {
    const allValues = getValues();

    if (allValues.password !== allValues.confirmpassword) {
      setError("confirmpassword", { message: "Passwords DON'T match" });
      return;
    }

    const gatheredData = {
      ...(isBarber ? { reviewssum: 0, reviewamount: 0, reviewedby: [] } : ""),
    };

    for (const value of Object.keys(allValues)) {
      const enteredValue = allValues[value];
      const trimmedValue = isValid(enteredValue);

      if (!trimmedValue) {
        setError(value, { message: "Empty field is not valid" });
        return;
      } else {
        gatheredData[value] = trimmedValue;
      }
    }

    delete gatheredData.confirmpassword;

    const registerBarber = async () => {
      try {
        await axios.post(
          `${BASE_URL}/${isBarber ? "barbers" : "clients"}`,
          gatheredData
        );
        navigate("/barbers");
      } catch (error) {
        console.error(error);
      }
    };

    registerBarber();
  };

  const handleRoleChange = () => setIsBarber((prev) => !prev);

  return {
    submitHandler,
    handleRoleChange,
    isBarber,
    register,
    handleSubmit,
    errors,
    BARBER_REGISTRATION_ATTRIBUTES,
    CLIENT_REGISTRATION_ATRRIBUTES,
  };
};

export const useLogin = () => {
  // const { register, setError, handleSubmit, getValues, formState: { error } } = useForm();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const { activateUser } = useContextValues();

  const navigate = useNavigate();

  const submitHandler = () => {
    const { enteredPassword, enteredEmail } = getValues();

    const authenticateUser = async () => {
      try {
        const response = await axios.get(BASE_URL + "/clients");

        const client = response.data.find(
          (client) => client.email === enteredEmail
        );

        if (!client) {
          setError("enteredEmail", { message: "Unknown email" });
          return;
        } else if (client.password !== enteredPassword) {
          setError("enteredPassword", { message: "Incorrect password" });
          return;
        }

        localStorage.setItem(
          "user",
          JSON.stringify({ email: client.email, loggedIn: true })
        );

        activateUser({ loggedIn: true, email: client.email });
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };

    authenticateUser();
  };

  return {
    handleSubmit,
    submitHandler,
    register,
    setError,
    errors,
  };
};
