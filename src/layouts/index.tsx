import React from "react";

export { default as LoadingLayout } from "layouts/LoadingLayout";

// LAZY LOADED FILE
const BaseLayout = React.lazy(() => import("layouts/BaseLayout"));
const AuthLayout = React.lazy(() => import("layouts/AuthLayout"));
const ProtectedLayout = React.lazy(() => import("layouts/ProtectedLayout"));

export { BaseLayout, AuthLayout, ProtectedLayout };
