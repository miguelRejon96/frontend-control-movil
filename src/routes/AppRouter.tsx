import { Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Login from "../layout/Login";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../layout/error-page";
import Account from "../pages/Account";
import Documentation from "../pages/Documentation";
import Devices from "../pages/Devices/DevicesContent";
import LoadingPage from "../layout/LoadingPage";

const HomePage = lazy(() => import("../pages/Home"));

const withCondition = (Component: any, redirectTo: string) => {
  return function InnerComponent(props: any) {
    const condition = localStorage.getItem("user");
    return condition ? (
      <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
      </Suspense>
    ) : (
      <Navigate to={redirectTo} />
    );
  };
};

const withLoggedIn = (Component: any): any =>
  withCondition(Component, "/login");

export const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: withLoggedIn(HomePage)(),
        },
        {
          path: "/account",
          element: withLoggedIn(Account)(),
        },
        {
          path: "/documentation",
          element: withLoggedIn(Documentation)(),
        },
        {
          path: "/devices",
          element: withLoggedIn(Devices)(),
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
};
