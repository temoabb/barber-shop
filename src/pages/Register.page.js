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

  const callBack = ({ label, type }) => (
    <StyledFormControl key={label}>
      {console.log(label.split(" ").join(""))}
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        {...register(`${label.split(" ").join("")}`, {
          required: true,
          maxLength: 5,
        })}
        id={label}
        type={type ? type : "text"}
      />
    </StyledFormControl>
  );

  const renderedInputs = isBarber
    ? BARBER_REGISTRATION_ATTRIBUTES.map(callBack)
    : CLIENT_REGISTRATION_ATRRIBUTES.map(callBack);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <>
      <StyledButton onClick={() => setIsBarber((prev) => !prev)}>
        Register as a {isBarber ? "client" : "barber"}
      </StyledButton>
      <StyledForm key={isBarber} onSubmit={handleSubmit(submitHandler)}>
        <h2>{isBarber ? "Barber" : "Client"} Registration</h2>

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
