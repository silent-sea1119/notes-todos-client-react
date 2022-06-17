import React from "react";
import { AuthWrapper, AuthLogin } from "components";

const Login = () => {
  return (
    <>
      <AuthWrapper message="Login to your account">
        <AuthLogin />
      </AuthWrapper>
    </>
  );
};

export default Login;
