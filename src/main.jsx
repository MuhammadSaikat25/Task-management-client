import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "./pages/MainHome/MainHome";
import HomePage from "./pages/MainHome/HomePage/HomePage";
import AuthProvider from "./Firebase/AuthProvider";
import SingUp from "./pages/Singup/SingUp";
import SingIn from "./pages/SingIn/SingIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTodo from "./pages/Dashboard/AddTodo";
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
  },{
    path:"login",
    element:<SingIn></SingIn>
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"addTodo",
        element:<AddTodo></AddTodo>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
