import React from "react";
import { NavLink } from "react-router-dom";

const AuthLogin = () => {
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
      {/* PASSWORD */}
      <div className="form-group">
        <label htmlFor="password" className="control-label">
          Password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgb-15 text-center">
        Don't have an account?
        <NavLink to="/signup" className="btn-link mgl-3">
          Signup
        </NavLink>
      </div>

      <button className="btn btn-green w-100 pdy-16 mx-auto">Login</button>

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgt-15 text-center">
        Can't remember password?
        <NavLink to="/request-password" className="btn-link mgl-3">
          Reset Now
        </NavLink>
      </div>
    </div>
  );
};

export default AuthLogin;
