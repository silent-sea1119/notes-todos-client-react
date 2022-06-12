import React from "react";
import { useToggle } from "hooks";
import { ProfileBar } from "components";

import "./TopUserInfo.scss";

const TopUserInfo = () => {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <div className="position-relative">
        <div className="user-profile color-grey pointer" onClick={setToggle}>
          <div className="avatar rounded-circle">
            <div className="avatar-text fw-600">RJ</div>
          </div>

          <div className="user-name fw-600 mgr-10 text-capitalize">
            Richy Jones
          </div>

          <div
            className={`icon icon-caret-down f-size-12 fw-600 ${
              toggle && "rotate-180"
            }`}
          ></div>
        </div>

        {/* DROPDOWN MENU */}
        <div
          className={`${toggle && "menu-wrapper"}`}
          onClick={setToggle}
        ></div>

        <div className={`menu h-auto rounded-5 ${toggle && "show-menu"}`}>
          <div className="item">Update Prolile</div>
          <div className="item">Log Out</div>
        </div>
      </div>

      {/* SHOW PROFILE BAR */}
      {false && <ProfileBar />}
    </>
  );
};

export default TopUserInfo;
