import React from "react";
import { OverviewList } from "components";
import "./OverviewBlock.scss";

interface IPayloadType {
  title?: string;
  total?: number;
}

interface IOverviewBlock {
  title: string;
  payload: IPayloadType[];
}

const OverviewBlock = ({ title, payload }: IOverviewBlock) => {
  return (
    <div className="overview-block rounded-5 color-white-bg">
      {/* TITLE ROW */}
      <div className="title-row fw-600 color-black">{title}</div>

      {payload.map((data, index) => (
        <OverviewList title={data?.title} total={data?.total} key={index} />
      ))}
    </div>
  );
};

export default OverviewBlock;
