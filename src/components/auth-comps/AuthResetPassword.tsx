import React from "react";
import { NavLink } from "react-router-dom";

const AuthResetPassword = () => {
  return (
    <div>
      {/* PASSWORD ONE */}
      <div className="form-group">
        <label htmlFor="password" className="control-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      {/* PASSWORD TWO */}
      <div className="form-group">
        <label htmlFor="confirmPassword" className="control-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
        />
      </div>

      <button className="btn btn-green w-100 pdy-16 mx-auto">
        Complete Password Reset
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

export default AuthResetPassword;
