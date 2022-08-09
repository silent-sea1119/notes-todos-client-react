import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "hooks";

const AuthLayout = () => {
  const authUser = useAuth();

  return <>{authUser?.token ? <Navigate to="/" replace /> : <Outlet />}</>;
};

export default AuthLayout;
