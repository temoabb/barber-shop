import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 20vh;

  left: calc(50% - 20rem);
  width: 40rem;

  background-color: #ebfbff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  & b {
    color: #ff0099;
    font-style: italic;
  }

  & h3 {
    color: green;
    font-weight: bold;
    margin-top: 10px;
  }

  & h2 {
    color: green;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    margin: 15px 10px 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
    /* flex-direction: column; */
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

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModalForm = styled.form`
  & > section {
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 30px 0 10px;
    & > button {
      margin-left: 20px;
    }
  }

  & input {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 15px;
  }

  @media (max-width: 700px) {
    & section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & button {
      margin: 10px 0;
    }
  }
`;

export const StyledVisitHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2;
  padding: 1rem;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
