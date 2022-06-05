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
} from "../components/styles/Form.styled";

const Register = () => {
  console.log("Register");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isBarber, setIsBarber] = useState(false);

  const callBack = ({ label, type }) => {
    const registerId = label.split(" ").join("");
    return (
      <StyledFormControl key={label}>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        <StyledInput
          {...register(registerId, { required: true })}
          id={registerId}
          type={type ? type : "text"}
        />
        <small>{errors[registerId] ? `${label} is required` : ""}</small>
      </StyledFormControl>
    );
  };

  const renderedInputs = isBarber
    ? BARBER_REGISTRATION_ATTRIBUTES.map(callBack)
    : CLIENT_REGISTRATION_ATRRIBUTES.map(callBack);

  const submitHandler = () => {
    console.log("Submit");
  };

  console.log(errors);

  return (
    <>
      <StyledButton onClick={() => setIsBarber((prev) => !prev)}>
        Register as a {isBarber ? "client" : "barber"}
      </StyledButton>
      <StyledForm key={isBarber} onSubmit={handleSubmit(submitHandler)}>
        <h2 style={{ textAlign: "center", marginBottom: 10 }}>
          {isBarber ? "Barber" : "Client"} Registration
        </h2>

        {renderedInputs}

        <StyledButton
          style={{ width: "100%", marginTop: 15 }}
          bg="#90EE90"
          type="submit"
        >
          REGISTER
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Register;
