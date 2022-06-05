import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import {
  CLIENT_REGISTRATION_ATRRIBUTES,
  BARBER_REGISTRATION_ATTRIBUTES,
} from "../static/registrationAttributes";

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

  const isValid = (str) => str.trim();

  const submitHandler = () => {
    const allValues = getValues();

    if (allValues.password !== allValues.confirmpassword) {
      setError("confirmpassword", { message: "Passwords DON'T match" });
      return;
    }

    const gatheredData = {
      ...(isBarber ? { review: 0, reviewamount: 0 } : "")
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
