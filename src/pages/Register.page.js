import { useState } from "react";

import { useForm } from "react-hook-form";
import { StyledButton } from "../components/styles/Button.styled";

import {
  CLIENT_REGISTRATION_ATRRIBUTES,
  BARBER_REGISTRATION_ATTRIBUTES,
} from "../static/registrationAttributes";

import {
  StyledForm,
  StyledInput,
  StyledFormControl,
  StyledLabel,
  Switch,
} from "../components/styles/Form.styled";

const isValid = (str) => str.trim();

const Register = () => {
  console.log("Register");

  const {
    register,
    handleSubmit,
    getValues,

    setError,
    formState: { errors },
  } = useForm();

  const [isBarber, setIsBarber] = useState(false);

  const callback = ({ label, type }) => {
    const registerId = label.split(" ").join("").toLowerCase();

    return (
      <StyledFormControl key={label}>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        <StyledInput
          {...register(registerId, { required: true })}
          id={registerId}
          type={type ? type : "text"}
        />
        {errors[registerId] && (
          <small>{errors[registerId].message || `${label} is required`}</small>
        )}
      </StyledFormControl>
    );
  };

  const renderedInputs = isBarber
    ? BARBER_REGISTRATION_ATTRIBUTES.map(callback)
    : CLIENT_REGISTRATION_ATRRIBUTES.map(callback);

  const submitHandler = () => {
    const allValues = getValues();

    console.log(allValues);
    if (allValues.password !== allValues.confirmpassword) {
      setError("confirmpassword", { message: "Passwords DON'T match" });
      return;
    }

    console.log("Passwords match");

    const gatheredData = {};

    for (const value of Object.keys(allValues)) {
      // ["firstname", "lastname", "password" ...]
      const enteredValue = allValues[value];
      const trimmedValue = isValid(enteredValue);

      if (!trimmedValue) {
        console.log("Typed value is NOT valid: ", value);
        setError(value, { message: "Empty field is not valid" });
        return;
      } else {
        gatheredData[value] = trimmedValue;
      }
    }

    console.log("Gathered", gatheredData);
  };

  const handleRoleChange = () => setIsBarber((prev) => !prev);

  const icon = (
    <>
      {isBarber ? "Barber" : "Client"} registration{" "}
      <i
        style={{ color: "#ff0099" }}
        className={`fa-solid ${isBarber ? "fa-scissors" : "fa-user-tie"}`}
      ></i>
    </>
  );

  console.log(errors);
  return (
    <>
      <StyledForm key={isBarber} onSubmit={handleSubmit(submitHandler)}>
        <Switch>
          <h2>{icon}</h2>
          <StyledButton type="button" bg="#ebfbff" onClick={handleRoleChange}>
            Register as a {isBarber ? "client" : "barber"}
          </StyledButton>
        </Switch>

        {renderedInputs}
        <StyledButton bg="#90EE90" type="submit">
          REGISTER
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Register;
