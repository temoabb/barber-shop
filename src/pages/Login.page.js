import React, { useContext } from "react";
import { Navigate, Link } from "react-router-dom";

import { Context } from "../store/Context";

import { useLogin } from "../hooks/useHttp";

import {
  StyledFormControl,
  StyledLabel,
  StyledInput,
  StyledForm,
} from "../components/styles/Form.styled";

import { StyledButton } from "../components/styles/Button.styled";

const Login = () => {
  const context = useContext(Context);
  const { register, errors, handleSubmit, submitHandler } = useLogin();

  if (context.loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <h1>Login</h1>
      <StyledFormControl>
        <StyledLabel htmlFor={"email"}>Email</StyledLabel>
        <StyledInput
          {...register("enteredEmail", { required: true })}
          id="email"
          type="email"
        />
        {errors["enteredEmail"] && (
          <small>{errors["enteredEmail"].message || `Email is required`}</small>
        )}
      </StyledFormControl>
      <StyledFormControl>
        <StyledLabel htmlFor={"password"}>Password</StyledLabel>
        <StyledInput
          {...register("enteredPassword", { required: true })}
          id="password"
          type="password"
        />
        {errors["enteredPassword"] && (
          <small>
            {errors["enteredPassword"].message || `Password is required`}
          </small>
        )}
      </StyledFormControl>
      <small>
        Don't have an account? <Link to="/register">Register now</Link>
      </small>
      <StyledButton bg="#00FF83" color="#fff" type="submit">
        LOGIN
      </StyledButton>
    </StyledForm>
  );
};

export default Login;
