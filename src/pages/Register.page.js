import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useHttp";
import { StyledButton } from "../components/styles/Button.styled";

import {
  StyledForm,
  StyledInput,
  StyledFormControl,
  StyledLabel,
  Switch,
} from "../components/styles/Form.styled";

import { Navigate } from "react-router-dom";

import useContextValues from "../hooks/useContextValues";

const Register = () => {
  console.log("RegisterPage");

  const { loggedIn } = useContextValues();

  const {
    submitHandler,
    handleRoleChange,
    isBarber,
    register,
    handleSubmit,
    errors,
    BARBER_REGISTRATION_ATTRIBUTES,
    CLIENT_REGISTRATION_ATRRIBUTES,
  } = useRegister();

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

  const icon = (
    <>
      {isBarber ? "Barber" : "Client"} registration{" "}
      <i
        style={{ color: "#ff0099" }}
        className={`fa-solid ${isBarber ? "fa-scissors" : "fa-user-tie"}`}
      ></i>
    </>
  );

  if (loggedIn) {
    return <Navigate to="/" />;
  }

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
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
        <StyledButton bg="#90EE90" type="submit">
          REGISTER
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Register;
