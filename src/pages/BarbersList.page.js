import React from "react";
import axios from "axios";

import { StyledBarberCard } from "../components/styles/BarberCard.styled";
import { StyledButton } from "../components/styles/Button.styled";

const API_URL = "http://localhost:5000/barbers";

const BarbersList = () => {
  console.log("BarbersList");
  const [barbers, setBarbers] = React.useState([]);

  React.useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("response", response);
        setBarbers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBarbers();
    return () => console.log("Cancel axios requiest");
  }, []);

  return (
    <>
      {barbers.map(
        ({
          id,
          firstname,
          surname,
          phone,
          address,
          hours,
          email,
          price,
          currency,
          review,
          reviewAmount,
        }) => {
          return (
            <StyledBarberCard key={id}>
              <div>
                <p>
                  {firstname} {surname} {phone} {address}
                </p>
                <StyledButton bg="#ff0099" color="#fff">
                  Book now
                </StyledButton>
              </div>
            </StyledBarberCard>
          );
        }
      )}
    </>
  );
};

export default BarbersList;
