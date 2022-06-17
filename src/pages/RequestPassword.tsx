import React from "react";
import { AuthWrapper, AuthRequestPassword } from "components";

const RequestPassword = () => {
  return (
    <>
      <AuthWrapper message="Reset your password">
        <AuthRequestPassword />
      </AuthWrapper>
    </>
  );
};

export default RequestPassword;
