import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "hooks/storeHook";
import { getGeneral, toggleSidebar } from "store/generalSlice/sliceGetters";
import { SideNavItem, SideNewProject } from "components";

import "./SideBar.scss";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { show_sidebar } = useAppSelector(getGeneral);
  const [toggle, setToggle] = React.useState<boolean>(show_sidebar);

  React.useEffect((): void => {
    setToggle(show_sidebar);
  }, [show_sidebar]);

  React.useEffect((): void => {
    toggle && dispatch(toggleSidebar());
    setToggle(false);
  }, [location, dispatch]);

  const hideSidebar = React.useCallback(
    (evt: any): void => {
      if (evt.target.classList.contains("sidebar-build-cover")) {
        dispatch(toggleSidebar());
        setToggle(show_sidebar);
      }
    },
    [dispatch, show_sidebar]
  );

  return (
    <div
      className={`sidebar-build-cover ${toggle && "toggle-sidebar"}`}
      onClick={hideSidebar}
    >
      <div className="sidebar-build h-100">
        {/* BRAND NAME SECTION */}
        <div className="brand-row">
          <div className="wrapper">
            <div className="brand-icon icon-nothy-app color-ash-white"></div>
            <h2 className="brand-name color-white fw-600">Nothy</h2>
          </div>
        </div>

        {/* NAV ITEMS AREA */}
        <div className="nav-item-area w-100">
          <div className="nav-category fw-600">Calendar Filters</div>

          <SideNavItem title="Today" icon="star f-size-19-5" link="/today" />
          <SideNavItem title="Upcoming" icon="notes" link="/upcoming" />
          <SideNavItem
            title="Yesterday"
            icon="today fw-700 f-size-17-5"
            link="/yesterday"
          />
        </div>

        {/* PROJECT ITEMS AREA */}
        <div className="nav-item-area w-100">
          <div className="nav-category fw-600">Projects</div>

          <SideNavItem
            title="Project One"
            icon="business"
            link="/project/project-one"
          />
          <SideNavItem
            title="Project Two"
            icon="business"
            link="/project/project-two"
          />
          <SideNavItem
            title="Project Three"
            icon="business"
            link="/project/project-three"
          />
        </div>

        {/* CREATE PROJECT */}
        <SideNewProject />
      </div>
    </div>
  );
};

export default SideBar;
