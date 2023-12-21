import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "./pages/MainHome/MainHome";
import HomePage from "./pages/MainHome/HomePage/HomePage";
import AuthProvider from "./Firebase/AuthProvider";
import SingUp from "./pages/Singup/SingUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path:"singUp",
    element:<SingUp></SingUp>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
