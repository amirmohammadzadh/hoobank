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
        <CommentsItem
          title={
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          }
          name={"Herman Jensen"}
          position={"Founder & Leader"}
          img={"./img/user01.png"}
        />
        <CommentsItem
          title={
            "Money makes your life easier. If you're lucky to have it, you're lucky."
          }
          name={"Steve Mark"}
          position={"Founder & Leader"}
          img={"./img/user02.png"}
        />
        <CommentsItem
          title={
            "It is usually people in the money business, finance, and international trade that are really rich."
          }
          name={"Kenn Gallagher"}
          position={"Founder & Leader"}
          img={"./img/user03.png"}
        />
      </div>
    </div>
  );
}
