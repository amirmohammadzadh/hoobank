import React from "react";
import "./Comments.css";
import CommentsItem from "./CommentsItem";

export default function Comments() {
  return (
    <div className="comment container">
      <div className="comment__top">
        <h1>
          What people are <br /> saying about us
        </h1>
        <p>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>
      <div className="comment__bottom">
        <CommentsItem />
        <CommentsItem />
        <CommentsItem />
      </div>
    </div>
  );
}
