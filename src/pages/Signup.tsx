import React from "react";
import { AuthWrapper, AuthSignup } from "components";

const Signup = () => {
  return (
    <>
      <AuthWrapper message="Register an account">
        <AuthSignup />
      </AuthWrapper>
    </>
  );
};

export default Signup;
