import React from "react";

export default function CommentsItem() {
  return (
    <div className="comment__item">
      <img src="./img/comment.svg" alt="comment" />
      <h3>
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
      </h3>
      <div className="comment__profile">
        <img src="./img/user01.png" alt="user" />
        <div className="comment__profile_title">
          <h2>Herman Jensen</h2>
          <span>Founder & Leader</span>
        </div>
      </div>
    </div>
  );
}
