import React from 'react'
import "./TopBar.scss"

type TopBarTypes = {}

const TopBar = (props: TopBarTypes) => {
  return (
    <div className="topbar-build brand-white-bg">
    

    {/* HAMBURGER MENU */}
    <div className="burger-menu pointer">
      <div className="line line-one"></div>
      <div className="line line-two"></div>
      <div className="line line-three"></div>
    </div>

     {/* USER PROFILE */}
    <div className="user-profile">
     {/* PROFILE DETAILS */}
      <div
        className="profile-details position-relative brand-black"
       
      >
        <div className="user-name font-weight-600 mgr-8 text-capitalize pointer">
          { "Richy Jones" }
        </div>
        <div
          className="icon icon-chevron-down cfont-18 font-weight-600 pointer smooth-transition"
        ></div>
      </div>
    </div>
  </div>
  )
};

export default TopBar
