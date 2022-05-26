import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "components";
import "./BaseLayout.scss";

const BaseLayout = () => {
  return (
    <div className="base-layout">
      {/* SIDE BAR BUILD */}
      <SideBar />

      {/* BODY BUILD */}
      <div className="body-build">
        {/* TOP BAR BUILD */}
        <TopBar />

        {/* CONTENT BUILD */}
        <div className="content-build">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
