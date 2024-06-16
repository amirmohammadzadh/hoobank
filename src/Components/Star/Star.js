import React from "react";
import { FaRegStar } from "react-icons/fa";
import StarIcon from "./StarIcon";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import "./Star.css";

export default function Star({ title, paragraph }) {
  return (
    <div className="star">
      <div className="star__caption">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button className="star__caption_btn">Get Stated</button>
      </div>
      <div className="star__icon">
        <StarIcon
          icon={<FaRegStar />}
          title={"100% Secured"}
          paragraph={
            "The best credit cards offer some tantalizing combinations of promotions and prizes"
          }
        />
        <StarIcon
          icon={<MdOutlineSecurity />}
          title={"100% Secured"}
          paragraph={
            "We take proactive steps make sure your information and transactions are secure."
          }
        />
        <StarIcon
          icon={<FaLocationArrow />}
          title={"Balance Transfer"}
          paragraph={
            "A balance transfer credit card can save you a lot of money in interest charges."
          }
        />
      </div>
    </div>
  );
}
