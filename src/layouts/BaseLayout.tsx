import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, TopBar } from "components";

type BaseLayoutTypes = {};

const BaseLayout = (props: BaseLayoutTypes) => {
  return (
    <div className="base-layout">
      {/* SIDE BAR BUILD */}
      <Sidebar />

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
