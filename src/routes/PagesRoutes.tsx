import { useState } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../common/MainLayout/MainLayout"
import { casino, cricket, gamedetails, home, login, profile, ledger, confirm_link,  liveTeen, liveCasinoBet, andar_bahar, casinoLive } from "./Links"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Casino from "../pages/Casino/Casino"
import Profile from "../pages/Profile/Profile"
import GameDetails from "../pages/GameDetails/GameDetails"
import { useGetUserBalanceMutation } from "../store/service/userServices/userServices"
import MyLedger from "../pages/MyLedger/MyLedger"
import Confirm from "../pages/Confirm/Confirm"
import LiveTennPatti from "../pages/LiveTennPatti/LiveTennPatti"
import CasinoBet from "../pages/LiveTennPatti/CasinoBet/CasinoBet"
import CasinoMainPage from "../pages/Casino_New/CasinoMainPage/CasinoMainPage"

const Router = () => {
  const [hederName, setHederName] = useState<string>("")

  const [getUserBalance, { data: userBalance }] = useGetUserBalanceMutation()


  return createBrowserRouter([
    {
      path: login,
      element: <Login getUserBalance={getUserBalance}/>,
    },
    {
      path: confirm_link,
      element: <Confirm />,
    },
    {
      path: "/",
      element: <MainLayout hederName={hederName} getUserBalance={getUserBalance} userBalance={userBalance?.data}/>,
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
          element: <GameDetails setHederName={setHederName} getUserBalance={getUserBalance}/>,
        },
        {
          path: ledger,
          element: <MyLedger/>,
        },
        {
          path: casinoLive,
          element: <CasinoMainPage/>,
        },
        {
          path: andar_bahar,
          element: <LiveTennPatti type={2}/>,
        },
        {
          path: liveCasinoBet,
          element: <CasinoBet />,
        },
      ],
    },
  ])
}

export default Router
