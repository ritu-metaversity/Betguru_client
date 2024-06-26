import { RouterProvider } from "react-router-dom"
import "./App.scss"
import Router from "./routes/PagesRoutes"
import './pages/Dashboard/Dashboard.scss'
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    mode: 'light'
  },
});


const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>

    <RouterProvider router={Router()} />
    </ThemeProvider>
    </>
  )
}

export default App
