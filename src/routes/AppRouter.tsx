import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT ROUTE PAGES LAZILY
const BaseLayout = React.lazy(() => import("layouts/BaseLayout"));
const ActivityArea = React.lazy(() => import("pages/ActivityArea"));
const ManageNote = React.lazy(() => import("pages/ManageNote"));
const ViewNote = React.lazy(() => import("pages/ViewNote"));

const Loading = () => <p>Loading ...</p>;

export default function AppRouter() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<ActivityArea />} />
          <Route path="today" element={<ActivityArea />} />
          <Route path="upcoming" element={<ActivityArea />} />
          <Route path="yesterday" element={<ActivityArea />} />
          <Route path="project" element={<ActivityArea />} />

          <Route path="manage-note" element={<ManageNote />}>
            <Route path=":id" element={<ManageNote />} />
          </Route>

          <Route path="view-note" element={<ViewNote />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}
