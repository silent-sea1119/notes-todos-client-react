import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavItem.scss";

type SideNavItemTypes = {
  title: string;
  icon: string;
  link: string;
};

const SideNavItem = ({ title, icon, link }: SideNavItemTypes) => {
  return (
    <NavLink to={`${link}`} className="nav-item mgb-2">
      <div className="wrapper w-100">
        {/* CURVE */}
        <div className="curve curve-top"></div>
        <div className="curve curve-bottom"></div>

        <div className={`nav-icon icon-${icon}`}></div>
        <div className="nav-text">{title}</div>
      </div>
    </NavLink>
  );
};

SideNavItem.defaultProps = {
  title: "upcoming",
  icon: "yesterday",
};

export default SideNavItem;
