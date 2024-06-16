import React from "react";
import "./Service.css";
export default function Service() {
  return (
    <div className="service container">
      <div className="service__top">
        <img src="./img/service01.png" alt="" />
        <img src="./img/service02.png" alt="" />
        <img src="./img/service03.png" alt="" />
        <img src="./img/service04.png" alt="" />
      </div>
      <div className="service__bottom">
        <div className="service__bottom_title">
          <h1>Come try our service now!</h1>
          <p>
            Everything you need to accept card payments and <br /> grow your
            business anywhere on the planet.
          </p>
        </div>
        <button>Get started</button>
      </div>
    </div>
  );
}
