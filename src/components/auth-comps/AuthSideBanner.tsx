import React from "react";
import "./AuthSideBanner.scss";

const AuthSideBanner = () => {
  return (
    <div className="auth-side-banner">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://res.cloudinary.com/richy-jones/image/upload/v1655138078/nahil-naseer-xljtGZ2-P3Y-unsplash-min.jpg"
        alt="NothyAuthImg"
        className="background-img"
      />

      {/* OVERLAY */}
      <div className="background-overlay"></div>
    </div>
  );
};

export default AuthSideBanner;
