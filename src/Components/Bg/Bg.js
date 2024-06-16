import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import "./Bg.css";

export default function Bg({ marginTop, marginRight, zIndex }) {
  return (
    <div
      className="bg"
      style={{
        top: `${marginTop}`,
        marginRight: `${marginRight}`,
        zIndex: `${zIndex}`,
      }}
    >
      <FaRegCircle className="icon__bg" />
    </div>
  );
}
