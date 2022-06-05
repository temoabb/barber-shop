import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 30px;
  border-radius: 15px;
  width: 70%;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.15);
  animation: slide-down 300ms ease-out forwards;

  & > button {
    width: 100%;
    margin-top: 15px;
  }

  & > h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 750px) {
    margin: 10px 0;
    width: 100%;
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 18px;
  font-weight: bold;

  & > small {
    color: red;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
`;

export const StyledLabel = styled.label`
  /* font-style: italic; */
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  background-color: "red";
  margin-bottom: 40px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */

  @media (max-width: 750px) {
    flex-direction: column;
    & > button {
      margin-top: 30px;
    }
  }
`;
