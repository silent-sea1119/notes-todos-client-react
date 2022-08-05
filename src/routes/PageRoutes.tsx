import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
import { BaseLayout, AuthLayout, LoadingLayout, ProtectedLayout } from "layouts";
import {
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
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Navigate to="/today" replace />} />
            <Route path="today" element={<ActivityArea />} />
            <Route path="upcoming" element={<ActivityArea />} />
            <Route path="yesterday" element={<ActivityArea />} />
            <Route path="project/:project" element={<ActivityArea />} />
          </Route>
        </Route>

        {/* NON-AUTHENTICATED ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/request-password" element={<RequestPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
