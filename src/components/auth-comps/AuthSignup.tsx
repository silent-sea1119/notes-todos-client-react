import React from "react";
import { NavLink } from "react-router-dom";

const AuthSignup = () => {
  return (
    <div>
      {/* FULL NAME */}
      <div className="form-group">
        <label htmlFor="fullName" className="control-label">
          Full Name
        </label>
        <input
          type="text"
          name=""
          id="fullName"
          className="form-control"
          placeholder="Richy Jones"
        />
      </div>

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
        Already have an account?
        <NavLink to="/login" className="btn-link mgl-3">
          Login
        </NavLink>
      </div>

      <button className="btn btn-green w-100 pdy-16 mx-auto">Register</button>
    </div>
  );
};

export default AuthSignup;
