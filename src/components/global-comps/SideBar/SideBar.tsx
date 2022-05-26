import React from "react";
import { SideNavItem, SideNewProject } from "components";

import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar-build-cover">
      <div className="sidebar-build h-100">
        {/* BRAND NAME SECTION */}
        <div className="brand-row">
          <div className="wrapper">
            <div className="brand-icon icon-nothy-app color-brown-light"></div>
            <h2 className="brand-name color-white fw-600">Nothy App</h2>
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
