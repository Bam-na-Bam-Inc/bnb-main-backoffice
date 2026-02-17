import DashboardLayout from "@/layouts/DashboardLayout";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import LoginPage from "@/pages/LandingPages/LoginPage";
import RegistrationPage from "@/pages/LandingPages/RegistrationPage";
import NoAccess from "@/pages/NoAccess";
import type { RouteObject } from "react-router";

export const routers: RouteObject[] = [
  {
    path: "*",
    element: <NoAccess />,
  },

  {
    element: <LandingPageLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/registration-page",
        element: <RegistrationPage />,
      },
    ],
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard-page",
        element: <Dashboard />,
      },
      {
        path: "/registration-page",
        element: <RegistrationPage />,
      },
    ],
  },
];
