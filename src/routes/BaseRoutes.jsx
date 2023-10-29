import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const LayoutAuth = lazy(() => import("../components/auth/LayoutAuth"));
const LayoutDasboard = lazy(() =>
  import("../components/dashboard/LayoutDashboard")
);
const LayoutScheduling = lazy(() => import("../components/managepatient/LayoutManagePatient"));

export const routes = {
  AUTH: "/",
  DASHBOARD: "/dashboard",
  SCHEDULING: "/scheduling"
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.AUTH} element={<LayoutAuth />} />
        <Route path={routes.SCHEDULING} element={<LayoutScheduling />} />
        <Route
          path={routes.DASHBOARD}
          element={
            <LayoutDasboard />
          }
        />
      </Routes>
    </>
  );
};

export default BaseRoutes;
