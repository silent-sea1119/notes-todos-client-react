import React from "react";
import "./OverviewCard.scss";

interface IOverviewCard {
  title: string;
  value: number;
  icon: string;
}

const OverviewCard = ({ title, value, icon }: IOverviewCard) => {
  return (
    <div className="overview-card rounded-5 color-white-bg">
      {/* LEFT */}
      <div className="left">
        <div className="top fw-700 mgb-6 color-black">{value}</div>
        <div className="bottom fw-500 color-ash">{title}</div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className={`icon icon-${icon} color-green`}></div>
      </div>
    </div>
  );
};

export default OverviewCard;
