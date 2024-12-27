import { StrictMode, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import ReactDOM from "react-dom/client";
import { routes } from "./router/router.ts";

const router = createBrowserRouter(routes);

// eslint-disable-next-line react-refresh/only-export-components
const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
