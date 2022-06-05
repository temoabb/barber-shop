import { useForm } from "react-hook-form";
import { StyledButton } from "../components/styles/Button.styled";

import {
  StyledForm,
  StyledInput,
  StyledFormControl,
} from "../components/styles/Form.styled";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submitHandler)}>
        <h2>Register</h2>

        <StyledFormControl>
          <StyledInput />
        </StyledFormControl>
        <StyledFormControl>
          <StyledInput />
        </StyledFormControl>
        <StyledFormControl>
          <StyledInput />
        </StyledFormControl>
        <StyledFormControl>
          <StyledInput />
        </StyledFormControl>

        <StyledButton type="submit">REGISTER</StyledButton>
      </StyledForm>
    </>
  );
};

export default Register;
