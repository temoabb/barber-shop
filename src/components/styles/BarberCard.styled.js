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
  flex-direction: ${({ direction }) => direction || "row"};

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

  /* img {
    width: 80%;
  } */

  /* & > div {
    flex: 1;
  } */

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
`;
