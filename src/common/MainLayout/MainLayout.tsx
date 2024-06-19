import { Box, Grid } from "@mui/material"
import React from "react"
import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import SidebarRightThemify from "../Sidebar/SideThemify/SidebarRightThemify"

const MainLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "320px",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "calc(100% - 320px)",
          }}
        >
          <Header />
          <SidebarRightThemify />
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default MainLayout
