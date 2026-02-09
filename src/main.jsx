import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./i18n/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
