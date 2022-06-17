import React from "react";
import { NavLink } from "react-router-dom";

const AuthRequestPassword = () => {
  return (
    <div>
      {/* EMAIL */}
      <div className="form-group">
        <label htmlFor="email" className="control-label">
          Email Address
        </label>
        <input
          type="email"
          name=""
          id="email"
          className="form-control"
          placeholder="Email Address"
        />
      </div>

      <button className="btn btn-green w-100 pdy-16 mx-auto">
        Reset Password
      </button>

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgt-15 text-center">
        Remember your password now?
        <NavLink to="/login" className="btn-link mgl-3">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthRequestPassword;
