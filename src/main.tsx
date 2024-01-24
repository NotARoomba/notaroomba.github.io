import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./tsx/pages/Home";
import Error from "./tsx/pages/Error";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/", // yes, again
        element: <Home />,
        errorElement: <Error />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: "/leaderboards",
      //   element: <Leaderboards />,
      //   errorElement: <Error />,
      // },
      {
        path: "*", // yes, again
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
