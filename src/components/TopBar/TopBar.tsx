import React from "react";
import { TopFilter, UserInfo } from "components";

import "./TopBar.scss";

type TopBarTypes = {};

const TopBar = (props: TopBarTypes) => {
  return (
    <div className="topbar-build brand-white-bg">
      {/* SEARCH BAR */}
      <TopFilter />

      {/* USER PROFILE */}
      <UserInfo />
    </div>
  );
};

export default TopBar;
