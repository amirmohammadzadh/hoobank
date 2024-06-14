import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { FaPercentage } from "react-icons/fa";
import GetStarted from "./GetStarted";
import Bg from "./Bg";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <Bg />
      <GetStarted />
      <div className="header__hero container">
        <div className="header__text">
          <div className="header__text_off">
            <FaPercentage />
            <span>20% Discount For 1 Month Account</span>
          </div>
          <h1 className="section__title">
            The Next <br /> Generation <br /> Payment Method.
          </h1>
          <p className="section__paragraph">
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. We <br /> examine annual
            percentage rates, annual fees.
          </p>
        </div>
        <div className="header__img">
          <img src="./img/robot.png" alt="" />
        </div>
      </div>
    </div>
  );
}
