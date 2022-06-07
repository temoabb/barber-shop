import styled from "styled-components";

export const StyledBarberCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  flex-direction: ${({ direction }) => direction || "row"};

  & > div {
    text-align: center;
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

  /* img {
    width: 80%;
  } */

  /* & > div {
    flex: 1;
  } */

  @media (max-width: 600px) {
    flex-direction: column;
    & > img {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
