import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
import { BaseLayout, LoadingLayout } from "layouts";
import { ActivityArea } from "pages";

export default function PageRoutes() {
  return (
    <React.Suspense fallback={<LoadingLayout />}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Navigate to="/today" replace />} />
          <Route path="today" element={<ActivityArea />} />
          <Route path="upcoming" element={<ActivityArea />} />
          <Route path="yesterday" element={<ActivityArea />} />
          <Route path="project/:project" element={<ActivityArea />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
