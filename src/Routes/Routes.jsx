import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import School from "../Pages/School/School";
import College from "../Pages/College/College";
import University from "../Pages/University/University";
import Competition from "../Pages/Competition/Competition";
import Leaderboard from "../Pages/Leaderboard/Leaderboard";
import Challenge from "../Pages/Challenge/Challenge";
// import Blog from "../Pages/Blog/Blog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";

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
        },
        {
          path:"competitions",
          element: <Competition></Competition>
        },
        {
          path:"leaderboard",
          element: <Leaderboard></Leaderboard>
        },
        {
          path:"challenge",
          element: <Challenge></Challenge>,
          loader:  () =>fetch('quiz.json')
        },
        {
          path:"blog",
          element: <AllBlogs></AllBlogs>
        },
        {
          path:"blog/:id",
          element: <Blog></Blog>
        },
        {
          path:"login",
          element: <Login></Login>
        },
        {
          path:"signup",
          element: <Signup></Signup>
        }
      ]
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'main',
          element: <DashHome></DashHome>
        }
      ]
    }
  ]);