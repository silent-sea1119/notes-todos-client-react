import React from "react";
import "./TopFilter.scss";

type TopFilterTypes = {};

const TopFilter = (props: TopFilterTypes) => {
  return (
    <div className="app-filter">
      <input
        type="search"
        className="form-control rounded-20"
        placeholder="Search Nothy..."
      />

      <div className="icon icon-search brand-grey f-size-18 index-1"></div>
    </div>
  );
};

export default TopFilter;
