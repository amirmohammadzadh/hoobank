import React from "react";

export default function StarIcon({ icon, title, paragraph }) {
  return (
    <div className="starIcon">
      <div className="starIcon__left">{icon}</div>
      <div className="starIcon__right">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
