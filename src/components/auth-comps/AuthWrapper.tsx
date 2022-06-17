import React from "react";
import "./AuthWrapper.scss";

interface IAuthWrapper {
  children: React.ReactElement;
  message: string;
}

const AuthWrapper = ({ children, message }: IAuthWrapper) => {
  return (
    <div className="auth-wrapper w-100">
      <div className="auth-container">
        {/* BRAND NAME */}
        <div className="brand-name">
          <div className="logo icon-nothy-app color-green mgr-5"></div>
          <div className="name color-green fw-600">Nothy</div>
        </div>

        {/* PAGE TEXT */}
        <div className="page-text text-center color-black fw-600">
          {message}
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
