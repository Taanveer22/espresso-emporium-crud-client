import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
);
