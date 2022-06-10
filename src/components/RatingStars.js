import React from "react";

function RatingStars({ rating }) {
  if (rating === 0) {
    return (
      <p>
        {new Array(5).fill("_").map((item) => (
          <i
            key={Math.random()}
            style={{ color: "grey" }}
            className="fa-solid fa-star"
          ></i>
        ))}
      </p>
    );
  }

  const integerPart = Math.trunc(rating);

  const decimalStarColor = rating - integerPart === 0 ? "grey" : "yellow";

  const decimalStar = (
    <i
      style={{ color: decimalStarColor }}
      className={`fa-solid fa-star${
        rating - integerPart >= 0.5 || rating - integerPart === 0
          ? ""
          : rating - integerPart < 0.5 && rating - integerPart >= 0
          ? "-half-stroke"
          : ""
      }`}
    ></i>
  );

  if (integerPart === 0) {
    return (
      <p>
        {decimalStar}
        {new Array(4).fill("_").map(() => (
          <i
            key={Math.random()}
            style={{ color: "grey" }}
            className="fa-solid fa-star"
          ></i>
        ))}
      </p>
    );
  }

  const fullStars = new Array(integerPart).fill("_").map((item) => {
    return (
      <i
        key={Math.random()}
        style={{ color: "yellow" }}
        className="fa-solid fa-star"
      ></i>
    );
  });

  return (
    <p>
      {fullStars}
      {decimalStar}
      {new Array(5 - integerPart - 1).fill("_").map(() => (
        <i
          key={Math.random()}
          style={{ color: "grey" }}
          className="fa-solid fa-star"
        ></i>
      ))}
    </p>
  );
}

export default RatingStars;
