import React from "react";
import { AuthSideBanner, AuthLogin } from "components";
import "layouts/AuthLayout.scss";

const Login = () => {
  return (
    <div className="auth-layout">
      {/* LEFT LAYOUT */}
      <div className="left-layout h-100">
        <AuthSideBanner />
      </div>

      {/* RIGHT LAYOUT */}
      <div className="right-layout h-100">
        <AuthLogin />
      </div>
    </div>
  );
};

export default Login;
