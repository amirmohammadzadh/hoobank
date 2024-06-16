import React from "react";
import "./Bill.css";
import Bg from "../Bg/Bg";
export default function Bill() {
  return (
    <div className="bill container">
      <div className="bill__left">
        <img src="./img/bill.png" alt="bill" />
      </div>
      <div className="bill__right">
        <h3>
          Easily control your <br /> billing & invoicing.
        </h3>
        <p>
          We consider the payment methods you'll offer your <br /> customers
          when you start your business. This is an <br /> important part of
          managing your business cash <br /> flow and meeting your customer's
          needs.
        </p>
        <p className="bill__right_app-store">
          <img src="./img/google.svg" alt="google" />
          <img src="./img/apple.svg" alt="apple" />
        </p>
      </div>
    </div>
  );
}
