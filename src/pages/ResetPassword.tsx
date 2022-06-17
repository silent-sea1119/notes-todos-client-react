import React from "react";
import { AuthWrapper, AuthResetPassword } from "components";

const ResetPassword = () => {
  return (
    <>
      <AuthWrapper message="Complete your password reset">
        <AuthResetPassword />
      </AuthWrapper>
    </>
  );
};

export default ResetPassword;
