import { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../common/MainLayout/MainLayout"
import { casino, cricket, gamedetails, home, login, profile } from "./Links"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Casino from "../pages/Casino/Casino"
import Profile from "../pages/Profile/Profile"
import GameDetails from "../pages/GameDetails/GameDetails"

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
        {
          path: gamedetails,
          element: <GameDetails />,
        },
      ],
    },
  ])
}

export default Router
