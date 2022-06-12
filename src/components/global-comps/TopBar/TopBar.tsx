import React from "react";
import { useAppDispatch } from "hooks/storeHook";
import { TopSearch, TopUserInfo } from "components";
import { toggleSidebar } from "store/generalSlice/sliceGetters";
import "./TopBar.scss";

const TopBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="topbar-build rounded-top-30 color-white-bg">
      <div className="wrapper">
        {/* MENU */}
        <div
          className="menu-block position-relative"
          onClick={() => dispatch(toggleSidebar())}
        >
          <div className="line line-one"></div>
          <div className="line line-two"></div>
          <div className="line line-three"></div>
        </div>

        {/* SEARCH BAR */}
        <TopSearch />
        {/* USER PROFILE */}
        <TopUserInfo />
      </div>
    </div>
  );
};

export default TopBar;
