import React from "react";
import "./TitleRow.scss";

type TitleRowTypes = {};

const TitleRow = (props: TitleRowTypes) => {
  return (
    <div className="title-row">
      <div className="title-text fw-600 brand-black">Today Activities</div>
    </div>
  );
};

export default TitleRow;
