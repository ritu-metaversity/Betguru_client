import { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../common/MainLayout/MainLayout"
import { casino, cricket, home, login, profile } from "./Links"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Casino from "../pages/Casino/Casino"
import Profile from "../pages/Profile/Profile"

const Router = () => {
  return createBrowserRouter([
    {
      path: login,
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: home,
          element: <Dashboard />,
        },
        {
          path: cricket,
          element: <Dashboard />,
        },
        {
          path: casino,
          element: <Casino />,
        },
        {
          path: profile,
          element: <Profile />,
        },
      ],
    },
  ])
}

export default Router
