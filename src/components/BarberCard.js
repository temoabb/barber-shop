import React from "react";
import { StyledBarberCard } from "./styles/BarberCard.styled";
import { StyledButton } from "./styles/Button.styled";

import RatingStars from "./RatingStars";

import harden1 from "../assets/images/harden-1.jpg";
import harden2 from "../assets/images/harden-2.jpg";

import { Link, useLocation } from "react-router-dom";

const BarberCard = (props) => {
  const {
    id,
    firstname,
    lastname,
    address,
    hours,
    email,
    price,
    reviewssum,
    reviewamount,
    onClick,
    animate,
  } = props;

  const location = useLocation();

  const rating =
    reviewamount === 0 ? 0 : Number((reviewssum / reviewamount).toFixed(1));

  return (
    <StyledBarberCard
      key={id}
      animate={animate}
      direction={id % 2 === 0 ? "row-reverse" : ""}
    >
      <img src={id % 2 === 0 ? harden1 : harden2} alt="harden" />
      <div>
        <h2>
          <Link
            onClick={(e) =>
              location.pathname.split("/").length > 2 && e.preventDefault()
            }
            to={`/barbers/${id}`}
          >{`${firstname} ${lastname}`}</Link>
        </h2>
        {address && (
          <h4>
            <i>{address}</i>
          </h4>
        )}
        {hours && <small>Working hours: {hours}</small>}
        <h3>Price: GEL {price}</h3>
        {email && <p>Contact: {email}</p>}
        Rating: {rating}/5 (reviewed by {reviewamount} reviewers)
        <RatingStars rating={rating} />
        <StyledButton onClick={onClick} bg="#ff0099" color="#fff">
          {address && email ? "Reserve now" : "Details"}
        </StyledButton>
      </div>
    </StyledBarberCard>
  );
};

export default BarberCard;

//  {/* <div className="App">
//         <i style={{ color: "yellow" }} className="fa-solid fa-star"></i>
//         <i
//           style={{ color: "yellow" }}
//           className="fa-solid fa-star-half-stroke"
//         ></i>
//         <i style={{ color: "#EDF5FC" }} className="fa-solid fa-star"></i>
//         barber-shop
//       </div> */}
