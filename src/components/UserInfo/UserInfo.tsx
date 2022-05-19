import React from "react";
import "./UserFilter.scss";

type UserInfoTypes = {};

const UserInfo = (props: UserInfoTypes) => {
  return (
    <div className="user-profile position-relative brand-black">
      <div className="user-icon icon-avatar-fill mgr-10 brand-blue"></div>

      <div className="user-name fw-600 mgr-10 text-capitalize pointer">
        {"Richy Jones"}
      </div>
      <div className="icon icon-caret-down f-size-12 fw-600 pointer smooth-transition"></div>
    </div>
  );
};

export default UserInfo;
