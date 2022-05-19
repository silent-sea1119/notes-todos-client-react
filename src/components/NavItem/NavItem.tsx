import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";

type NavItemTypes = {
  title: string;
  icon: string;
  link: string;
};

const NavItem = ({ title, icon, link }: NavItemTypes) => {
  return (
    <NavLink to={`${link}`} className="nav-item w-100">
      <div className={`nav-icon icon-${icon}`}></div>
      <div className="nav-text">{title}</div>
    </NavLink>
  );
};

NavItem.defaultProps = {
  title: "upcoming",
  icon: "yesterday",
};

export default NavItem;
