import { Suspense, useEffect, useState } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../common/MainLayout/MainLayout"
import { casino, cricket, gamedetails, home, login, profile, ledger, confirm_link } from "./Links"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Casino from "../pages/Casino/Casino"
import Profile from "../pages/Profile/Profile"
import GameDetails from "../pages/GameDetails/GameDetails"
import { useGetUserBalanceMutation } from "../store/service/userServices/userServices"
import MyLedger from "../pages/MyLedger/MyLedger"
import Confirm from "../pages/Confirm/Confirm"

const Router = () => {
  const [hederName, setHederName] = useState<string>("")
  const token = localStorage.getItem("client-token")

  const [getUserBalance, { data: userBalance }] = useGetUserBalanceMutation()

  useEffect(() => {
    if (token) {
      getUserBalance()
    }
  }, [token]);


  console.log(userBalance?.data, "userBalance")

  return createBrowserRouter([
    {
      path: login,
      element: <Login />,
    },
    {
      path: confirm_link,
      element: <Confirm />,
    },
    {
      path: "/",
      element: <MainLayout hederName={hederName} userBalance={userBalance?.data}/>,
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
          element: <GameDetails setHederName={setHederName} />,
        },
        {
          path: ledger,
          element: <MyLedger/>,
        },
      ],
    },
  ])
}

export default Router
