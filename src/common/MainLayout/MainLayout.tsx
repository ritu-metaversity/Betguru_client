import { Box } from "@mui/material"
import type { FC } from "react"
import { useEffect } from "react"
import Header from "../Header/Header"
import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import SidebarRightThemify from "../Sidebar/SideThemify/SidebarRightThemify"
import Footer from "../Footer/Footer"
import { useMediaQuery } from "@mui/material"
import MobileHeader from "../MobileHeader/MobileHeader"
import { useGetUserBalanceQuery, useHealthCheckMutation } from "../../store/service/userServices/userServices"

interface Props {
  hederName: string
  // userBalance: { balance: number } | undefined,
  // getUserBalance:any
}

const MainLayout: FC<Props> = ({ hederName }) => {
  const matches = useMediaQuery("(max-width:700px)");
  const token = localStorage.getItem("client-token");

  const [trigger, { data }] = useHealthCheckMutation();

  useEffect(() => {
    document.title = window.location.hostname.split('.')[0];
  }, []);

  const nav = useNavigate()

  useEffect(() => {
    if (!token) {
      nav("/login")
    }
  }, [nav, token])

  useEffect(()=>{
    if(token){
      const interval = setInterval(async () => {
        trigger();
      }, 1000); 
      clearInterval(interval);
    }
  }, [token, trigger])

  const { data: userBalance } = useGetUserBalanceQuery(undefined, { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: !token });


  // useEffect(() => {
  //   // let intervalId:any;
  //   if (token) {
      
  //     getUserBalance();

  //     // intervalId = setInterval(() => {
  //     //   getUserBalance();
  //     // }, 1000);
  //   }
  //   // return () => clearInterval(intervalId);
  // }, [token]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {!matches && (
          <Box sx={{ width: "320px" }}>
            {" "}
            <Sidebar userBalance={userBalance?.data} />{" "}
          </Box>
        )}
        <Box
          sx={{
            width: matches ? "100%" : "calc(100% - 320px)",
            backgroundColor: "#f1f0f5",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <div className="mobile_sticky">
          {matches && (
            <MobileHeader hederName={hederName} userBalance={userBalance?.data} />
          )}
          <Header />
          </div>
          
          <SidebarRightThemify />
          <Outlet />
        </Box>
        {matches && <Footer />}
      </Box>
    </>
  )
}

export default MainLayout
