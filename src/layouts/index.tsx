import React from "react";

export { default as LoadingLayout } from "layouts/LoadingLayout";

// LAZY LOADED FILE
const BaseLayout = React.lazy(() => import("layouts/BaseLayout"));

export { BaseLayout };
