import { lazy } from "react";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/login",
    Component: lazy(() => import("../pages/authentication/login/Login")),
  },
  {
    path: "/sign-up",
    Component: lazy(() => import("../pages/authentication/sign-up/SignUp")),
  },
  {
    path: "/main",
    Component: lazy(() => import("../pages/(withNavigation)/Layout")),
    children: [
      {
        index: true,
        Component: lazy(() => import("../pages/authentication/login/Login")),
      },
      {
        path: "/main/sign-up",
        Component: lazy(() => import("../pages/authentication/sign-up/SignUp")),
      },
    ],
  },
];
