import React from "react";
import { TopSearch, TopUserInfo } from "components";

import "./TopBar.scss";

const TopBar = () => {
  return (
    <div className="topbar-build rounded-top-30 color-white-bg">
      <div className="wrapper">
        {/* SEARCH BAR */}
        <TopSearch />

        {/* USER PROFILE */}
        <TopUserInfo />
      </div>
    </div>
  );
};

export default TopBar;
