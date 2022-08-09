import React from "react";
import { useToggle, useAuth, useInitials } from "hooks";
import { ProfileBar } from "components";
import { useAppDispatch } from "hooks/storeHook";
import { logoutUser } from "store/generalSlice/sliceGetters";

import "./TopUserInfo.scss";

const TopUserInfo = () => {
  const dispatch = useAppDispatch();

  const authUser = useAuth();
  const [nameInitial, setNameInitial] = useInitials();
  const [toggle, setToggle] = useToggle();
  const [profileToggle, setProfileToggle] = useToggle();

  const showProfileBar = () => {
    setToggle();
    setProfileToggle();
  };

  React.useEffect(
    () => setNameInitial(authUser.fullname),
    [authUser, setNameInitial]
  );

  const handleUserLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="position-relative">
        <div className="user-profile color-grey pointer" onClick={setToggle}>
          <div className="avatar rounded-circle">
            <div className="avatar-text fw-600">{nameInitial}</div>
          </div>

          <div className="user-name fw-600 mgr-10 text-capitalize">
            {authUser.fullname}
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
          <div className="item" onClick={showProfileBar}>
            <div className="icon icon-user-outline"></div>
            <div className="text">Update Prolile</div>
          </div>

          <div className="item" onClick={handleUserLogout}>
            <div className="icon icon-log-out"></div>
            <div className="text">Log Out</div>
          </div>
        </div>
      </div>

      {/* SHOW PROFILE BAR */}
      <ProfileBar
        toggleProfile={profileToggle}
        closeToggle={setProfileToggle}
      />
    </>
  );
};

export default TopUserInfo;
