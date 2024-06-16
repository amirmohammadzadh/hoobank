import React from "react";

export default function CommentsItem({ title, name, position, img }) {
  return (
    <div className="comment__item">
      <img src="./img/comment.svg" alt="comment" />
      <h3>{title}</h3>
      <div className="comment__profile">
        <img src={img} alt="user" />
        <div className="comment__profile_title">
          <h2>{name}</h2>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}
