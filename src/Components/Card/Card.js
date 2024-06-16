import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card__bg container">
      <div className="card__left">
        <h1>
          Find a better card deal <br /> in few easy steps
        </h1>
        <p>
          We've been researching and comparing credit <br /> cards for over 15
          years. You can easily compare <br /> more than 270 Australian credit
          cards using our free <br /> tools. When you find one that suits, we'll
          take you <br /> securely to the bank's website.
        </p>
        <button>Get Stated</button>
      </div>
      <div className="card__right">
        <img src="./img/card.png" alt="" />
      </div>
    </div>
  );
}
