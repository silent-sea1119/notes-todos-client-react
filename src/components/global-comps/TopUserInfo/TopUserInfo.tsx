import React from "react";
import "./TopUserInfo.scss";

const TopUserInfo = () => {
  return (
    <div className="user-profile color-grey pointer">
      <div className="user-avatar icon-avatar-fill mgr-10 color-green"></div>

      <div className="user-name fw-600 mgr-10 text-capitalize">Richy Jones</div>

      <div className="icon icon-caret-down f-size-12 fw-600"></div>
    </div>
  );
};

export default TopUserInfo;
