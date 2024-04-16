import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import School from "../Pages/School/School";
import College from "../Pages/College/College";
import University from "../Pages/University/University";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"school",
          element: <School></School>
        },
        {
          path:"college",
          element: <College></College>
        },
        {
          path:"university",
          element: <University></University>
        }
      ]
    },
  ]);