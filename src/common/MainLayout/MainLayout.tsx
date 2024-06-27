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

interface Props {
  hederName: string
  userBalance: { balance: number } | undefined
}

const MainLayout: FC<Props> = ({ hederName, userBalance }) => {
  const matches = useMediaQuery("(max-width:700px)")
  const token = localStorage.getItem("client-token")
  const nav = useNavigate()

  useEffect(() => {
    if (!token) {
      nav("/login")
    }
  }, [nav, token])

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
            <Sidebar userBalance={userBalance} />{" "}
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
          {matches && (
            <MobileHeader hederName={hederName} userBalance={userBalance} />
          )}
          <Header />
          <SidebarRightThemify />
          <Outlet />
        </Box>
        {matches && <Footer />}
      </Box>
    </>
  )
}

export default MainLayout
