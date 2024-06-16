import React from "react";
import StatisticsItem from "./StatisticsItem";
import "./Statistics.css";
import Star from "../Star/Star";

export default function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__top">
        <StatisticsItem number={"3800+"} title={"ACTIVE USERS"} />
        <StatisticsItem number={"230+"} title={"COMPANYS TRUSTED"} />
        <StatisticsItem number={"$230M+"} title={"TRANSACTIONS"} />
      </div>
      <div className="statistics__bottom">
        <Star
          title={"You do the business, well handle the money."}
          paragraph={
            "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
          }
        />
      </div>
    </div>
  );
}
