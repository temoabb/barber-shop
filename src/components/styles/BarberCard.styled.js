import styled from "styled-components";

export const StyledBarberCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  flex-direction: ${({ direction }) => (direction ? direction : "row")};

  animation: ${({ animate }) =>
    animate ? "slide-down 300ms ease-out forwards" : ""};

  & > div {
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 35px;
    border-radius: 15px;
  }

  & > img {
    width: 40%;
    height: auto;
    border-radius: 15px;
  }

  & button {
    width: 100%;
    margin-top: 20px;
  }

  & h2 {
    margin-bottom: 20px;
  }

  & a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    & > img {
      width: 100%;
      margin-bottom: 10px;
    }

    & > div {
      border: none;
    }
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

export const StyledBookingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  padding: 30px;
  margin: 40px 0;

  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-bottom: 10px;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 2;
    }
  }

  @media (max-width: 700px) {
    & > button {
      width: 100%;
    }
  }
`;
