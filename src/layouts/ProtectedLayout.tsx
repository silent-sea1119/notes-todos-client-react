import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "hooks"

const ProtectedLayout = () => {
  const authUser = useAuth();

  return (
    <>
      { authUser?.token ?  <Outlet /> : <Navigate to="/login" replace /> }
    </>
  );
};

export default ProtectedLayout;
