import React from "react";

const ActivityArea = React.lazy(() => import("pages/ActivityArea"));
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));
const RequestPassword = React.lazy(() => import("pages/RequestPassword"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));

export { ActivityArea, Login, Signup, RequestPassword, ResetPassword };
