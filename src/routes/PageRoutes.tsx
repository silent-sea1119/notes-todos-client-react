import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
import {
  BaseLayout,
  AuthLayout,
  LoadingLayout,
  ProtectedLayout,
} from "layouts";
import {
  DashboardArea,
  ProjectsArea,
  UsersArea,
  ActivityArea,
  Login,
  Signup,
  RequestPassword,
  ResetPassword,
} from "pages";

export default function PageRoutes() {
  return (
    <React.Suspense fallback={<LoadingLayout />}>
      <Routes>
        {/* AUTHENTICATED ROUTES */}
        <Route element={<ProtectedLayout />}>
          <Route element={<BaseLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardArea />} />
            <Route path="my-projects" element={<ProjectsArea />} />
            <Route path="users" element={<UsersArea />} />
            <Route path="project/:project_id" element={<ActivityArea />} />
          </Route>
        </Route>

        {/* NON-AUTHENTICATED ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/request-password" element={<RequestPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
