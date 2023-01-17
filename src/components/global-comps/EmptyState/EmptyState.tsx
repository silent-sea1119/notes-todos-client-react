import React from "react";
import "./EmptyState.scss";

const EmptyState = () => {
  const emptyStateImg = require("assets/OpenBox.png");

  return (
    <div className="empty-state">
      <img src={emptyStateImg} alt="emptyNote" className="mgb-15" />

      <div className="title-text text-center mgb-15">
        No result available yet
      </div>
      <div className="meta-text text-center light-dark-text mgb-50">
        You need to create the actions first before it shows here.
      </div>
    </div>
  );
};

export default EmptyState;
