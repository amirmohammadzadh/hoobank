import React from "react";
import "./Statistics.css";
export default function StatisticsItem({ number, title }) {
  return (
    <div className="statistics__item">
      <h1>{number}</h1>
      <p className="text">{title}</p>
    </div>
  );
}
