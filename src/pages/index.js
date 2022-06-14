import React from "react";

const ActivityArea = React.lazy(() => import("pages/ActivityArea"));
const Login = React.lazy(() => import("pages/Login"));
const Signup = React.lazy(() => import("pages/Signup"));

export { ActivityArea, Login, Signup };
