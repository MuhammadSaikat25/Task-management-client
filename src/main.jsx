import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "./pages/MainHome/MainHome";
import HomePage from "./pages/MainHome/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
