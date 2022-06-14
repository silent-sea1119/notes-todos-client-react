import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
import { BaseLayout, AuthLayout, LoadingLayout } from "layouts";
import { ActivityArea, Login, Signup } from "pages";

export default function PageRoutes() {
  return (
    <React.Suspense fallback={<LoadingLayout />}>
      <Routes>
        {/* AUTHENTICATED ROUTES */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Navigate to="/today" replace />} />
          <Route path="today" element={<ActivityArea />} />
          <Route path="upcoming" element={<ActivityArea />} />
          <Route path="yesterday" element={<ActivityArea />} />
          <Route path="project/:project" element={<ActivityArea />} />
        </Route>

        {/* NON-AUTHENTICATED ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
