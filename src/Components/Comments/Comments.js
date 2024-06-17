import React from "react";
import "./Comments.css";
import CommentsItem from "./CommentsItem";

const commentsList = [
  {
    title:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    position: "Founder & Leader",
    img: "./img/user01.png",
  },
  {
    title:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    position: "Founder & Leader",
    img: "./img/user02.png",
  },
  {
    title:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    position: "Founder & Leader",
    img: "./img/user03.png",
  },
];

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
        {commentsList.map(({ title, name, position, img }, index) => (
          <CommentsItem
            title={title}
            name={name}
            position={position}
            img={img} 
          />
        ))}
      </div>
    </div>
  );
}
