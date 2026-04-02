import { lazy } from "react";
import type { RouteObject } from "react-router";

/* No Access Page */
const NoAccessPage = lazy(() => import("@/pages/NoAccess"));

/* Layout Pages */
const DashboardLayoutPage = lazy(() => import("@/layouts/DashboardLayout"));
const LandingPageLayoutPage = lazy(() => import("@/layouts/LandingPageLayout"));

/* Landing Pages */
const LoginPage = lazy(() => import("@/pages/LandingPages/LoginPage"));
const LandingPage = lazy(() => import("@/pages/LandingPages/LandingPage"));

/* Main Dashboard Pages */
const DashboardPage = lazy(() => import("@/pages/DashboardPages/Dashboard"));
const BarangayPage = lazy(() => import("@/pages/DashboardPages/BarangayPage"));
const RentalPage = lazy(() => import("@/pages/DashboardPages/RentalPage"));
const BusinessPage = lazy(() => import("@/pages/DashboardPages/BusinessPage"));
const FeedBackPage = lazy(() => import("@/pages/DashboardPages/FeedBackPage"));
const RolePage = lazy(() => import("@/pages/DashboardPages/RolePage"));
const UserPage = lazy(() => import("@/pages/DashboardPages/UserPage"));

export const routers: RouteObject[] = [
  {
    path: "*",
    element: <NoAccessPage />,
  },

  {
    element: <LandingPageLayoutPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login-page",
        element: <LoginPage />,
      },
    ],
  },

  {
    element: <DashboardLayoutPage />,
    children: [
      {
        path: "/dashboard-page",
        element: <DashboardPage />,
      },
      {
        path: "/barangay-page",
        element: <BarangayPage />,
      },
      {
        path: "/rental-page",
        element: <RentalPage />,
      },
      {
        path: "/business-page",
        element: <BusinessPage />,
      },
      {
        path: "/feedback-page",
        element: <FeedBackPage />,
      },
      {
        path: "/role-page",
        element: <RolePage />,
      },
      {
        path: "/user-page",
        element: <UserPage />,
      },
    ],
  },
];
