import React from "react";

// AUTH IMPORTS
const DashboardArea = React.lazy(() => import("pages/DashboardArea"));
const ProjectsArea = React.lazy(() => import("pages/ProjectsArea"));
const UsersArea = React.lazy(() => import("pages/UsersArea"));
const ActivityArea = React.lazy(() => import("pages/ActivityArea"));

// NON AUTH IMPORTS
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const RequestPassword = React.lazy(() => import("pages/RequestPassword"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));

export {
  DashboardArea,
  ProjectsArea,
  UsersArea,
  ActivityArea,
  Login,
  Signup,
  RequestPassword,
  ResetPassword,
};
