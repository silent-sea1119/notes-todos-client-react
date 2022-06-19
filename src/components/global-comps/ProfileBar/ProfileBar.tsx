import React from "react";
import "./ProfileBar.scss";

interface IProfileBar {
  toggleProfile: boolean;
  closeToggle: () => void;
}

const ProfileBar = ({ toggleProfile, closeToggle }: IProfileBar) => {
  return (
    <div
      className={`profile-wrapper index-1 ${toggleProfile && "show-profile"}`}
    >
      {/* PROFILE OVERLAY */}
      <div className="profile-overlay" onClick={closeToggle}></div>

      {/* PROFILE BAR */}
      <div className="profile-bar">
        {/* CLOSE TRIGGER */}
        <div
          className="close-trigger pointer rounded-10"
          title="Close"
          onClick={closeToggle}
        >
          <div className="position-absolute w-100 h-100">
            <div className="icon-close color-white place-center"></div>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="profile-photo overflow-hidden rounded-circle">
          <div className="profile-text place-center color-white">EE</div>
        </div>

        {/* PROFILE NAME */}
        <div className="profile-name mgt-20 fw-600 color-black">
          EFEMENA ELVIS
        </div>

        <div className="profile-email color-ash">menaelvisjones@gmail.com</div>

        {/* ACTIVITIES */}
        <div className="activities mgt-20">
          <div className="activity">
            <div className="title">Projects created:</div>
            <div className="value">5</div>
          </div>

          <div className="activity">
            <div className="title">Total notes taken:</div>
            <div className="value">25</div>
          </div>

          <div className="activity">
            <div className="title">Total todos logged:</div>
            <div className="value">35</div>
          </div>
        </div>

        <form action="" className="form-area mgt-40 w-100">
          <div className="title-text color-black fw-600 mgb-15 text-center">
            Update Basic Info
          </div>

          <input
            type="text"
            className="form-control w-100 text-center mgb-15"
            placeholder="Enter Fullname"
          />

          <input
            type="file"
            className="form-control w-100 text-center mgb-20"
          />

          <button className="btn btn-green w-100 pdy-14">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileBar;
