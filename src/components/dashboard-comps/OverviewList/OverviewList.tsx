import React from "react";
import "./OverviewList.scss";

interface IOverviewListType {
  title?: string;
  total?: number;
}

const OverviewList = ({ title, total }: IOverviewListType) => {
  return (
    <div className="item-list">
      <div className="title-text">
        <div className="indicator"></div>
        <div className="text text-capitalize">{title} </div>
      </div>

      <div className="value-text">{total}</div>
    </div>
  );
};

export default OverviewList;
