import React from "react";
import { StyledBarberCard } from "./styles/BarberCard.styled";
import { StyledButton } from "./styles/Button.styled";

import harden1 from "../assets/images/harden-1.jpg";
import harden2 from "../assets/images/harden-2.jpg";

const BarberCard = (props) => {
  const {
    id,
    firstname,
    lastname,
    address,
    hours,
    email,
    price,
    review,
    reviewamount,
    onReserveVisit,
  } = props;

  return (
    <StyledBarberCard key={id} direction={id % 2 === 0 ? "row-reverse" : ""}>
      <img src={id % 2 === 0 ? harden1 : harden2} alt="harden" />
      <div>
        <h2>{`${firstname} ${lastname}`}</h2>
        Your presonal barber
        <h4>
          <i>{address}</i>
        </h4>
        <small>Working hours: {hours}</small>
        <h3>Price: GEL {price}</h3>
        <p>Contact: {email}</p>
        <p>
          Rating: {review}/5 (reviewed by {reviewamount} reviewers)
        </p>
        <StyledButton
          onClick={onReserveVisit.bind(null, props)}
          bg="#ff0099"
          color="#fff"
        >
          Book now
        </StyledButton>
      </div>
    </StyledBarberCard>
  );
};

export default BarberCard;
