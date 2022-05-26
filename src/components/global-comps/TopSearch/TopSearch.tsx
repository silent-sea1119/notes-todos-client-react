import React from "react";
import "./TopSearch.scss";

const TopSearch = () => {
  return (
    <div className="app-filter">
      <input
        type="search"
        className="form-control rounded-25"
        placeholder="Search across all projects..."
      />

      <div className="icon icon-search brand-grey f-size-18 index-1"></div>
    </div>
  );
};

export default TopSearch;
