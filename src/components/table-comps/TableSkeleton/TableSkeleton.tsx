import React from "react";
import "./TableSkeleton.scss";

const TableSkeleton = () => {
  return (
    <div className="table-skeleton mgb-50">
      <div className="skeleton-table-header"></div>
      <div className="skeleton-table-body"></div>
      <div className="skeleton-table-body"></div>
      <div className="skeleton-table-body"></div>
      <div className="skeleton-table-body"></div>
    </div>
  );
};

export default TableSkeleton;
