import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { TopUserInfo } from "components";
import { $serviceUtils as $utils } from "services";
import { PAGE_TITLE } from "constant";
import "./TopBar.scss";

const TopBar = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [pageTitle, setPageTitle] = React.useState<string>("Dashboard Area");

  React.useEffect(() => {
    const { pathname } = location;
    if (pathname === "/dashboard") setPageTitle(PAGE_TITLE[0]);
    else if (pathname === "/my-projects") setPageTitle(PAGE_TITLE[1]);
    else if (pathname === "/users") setPageTitle(PAGE_TITLE[2]);
    else setPageTitle(searchParams.get("title") ?? "Project Activity");
  }, [location, searchParams]);

  return (
    <div className="topbar-build rounded-top-30 color-ash-white-bg">
      <div className="wrapper">
        {/* MENU */}
        <div
          className="menu-block position-relative"
          onClick={() => $utils.emitter.emit("showSidebar")}
        >
          <div className="line line-one"></div>
          <div className="line line-two"></div>
          <div className="line line-three"></div>
        </div>

        {/* SEARCH BAR */}
        <div className="title-text fw-500 color-black">{pageTitle}</div>

        {/* USER PROFILE */}
        <TopUserInfo />
      </div>
    </div>
  );
};

export default TopBar;
