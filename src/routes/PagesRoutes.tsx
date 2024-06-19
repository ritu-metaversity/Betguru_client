import { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../common/MainLayout/MainLayout"
import { login } from "./Links"
import Login from "../pages/Login/Login"

// Lazy-loaded components
// const Setting = lazy(() => import("../pages/setting/Setting"));
// const Home = lazy(() => import("../pages/home/Home"));
// const Sports = lazy(() => import("../pages/sports/Sports"));
// const Login = lazy(() => import("../pages/login/Login"));
// const Deposit = lazy(() => import("../pages/deposit/Deposit"));
// const UplineWhatsapp = lazy(() => import("../pages/uplinewhatsapp/UplineWhatsapp"));
// const BalanceOverview = lazy(() => import("../pages/balanceoverview/BalanceOverview"));
// const ActiveLog = lazy(() => import("../pages/activelog/ActiveLog"));
// const MyProfile = lazy(() => import("../pages/myprofile/Myprofile"));
// const SportsDetail = lazy(() => import("../pages/sportsDetail/SportsDetail"));
// const CurrentBets = lazy(() => import("../pages/currentbets/CurrentBets"));
// const P2PTransfer = lazy(() => import("../pages/p2ptransfer/P2pTransfer"));
// const BetHistory = lazy(() => import("../pages/bethistory/BetHistory"));
// const AccountStatement = lazy(() => import("../pages/accountstatement/AccountStatement"));
// const P2PTransferLog = lazy(() => import("../pages/p2ptransferlog/P2PTransferLog"));
// const PaymentTransferLog = lazy(() => import("../pages/paymenttransferlog/PaymentTransferLog"));
// const Casino = lazy(() => import("../pages/casino/Casino"));
// const ChangePassword = lazy(() => import("../pages/changepassword/ChangePassword"));
// const Leagues = lazy(() => import("../pages/leagues/Leagues"));
// const LeaguesMatch = lazy(() => import("../pages/leagues/LeaguesMatch"));

const Router = () => {
  return createBrowserRouter([
    {
      path: login,
      element: (
        <Suspense fallback={"Loading... "}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        // {
        //   path: login,
        //   element: (
        //     <Suspense fallback={"Loading... "}>
        //       <Login />
        //     </Suspense>
        //   ),
        // },
      ],
    },
  ])
}

export default Router
