import React from "react";
import { NavItem } from "components";

import "./SideBar.scss";

type SideBarTypes = {};

const SideBar = (props: SideBarTypes) => {
  return (
    <div className="sidebar-build-cover box-shadow-effect">
      <div className="sidebar-build h-100">
        {/* BRAND NAME SECTION */}
        <div className="brand-row w-100">
          <div className="brand-icon icon-nothy-app brand-blue"></div>
          <h2 className="brand-name brand-blue fw-600">Nothy</h2>
        </div>

        {/* NAV ITEMS AREA */}
        <div className="nav-item-area w-100">
          <div className="nav-category fw-600">Filters</div>

          <NavItem title="Today" icon="calendar" link="/today" />
          <NavItem title="Upcoming" icon="calendar" link="/upcoming" />
          <NavItem title="Yesterday" icon="calendar" link="/yesterday" />
        </div>

        {/* PROJECT ITEMS AREA */}
        <div className="nav-item-area w-100">
          <div className="nav-category fw-600">Projects</div>

          <NavItem title="New Project" icon="business" link="/project" />
        </div>

        {/* CREATE PROJECT */}
      </div>
    </div>
  );
};

export default SideBar;
