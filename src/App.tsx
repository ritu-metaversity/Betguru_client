import { RouterProvider } from "react-router-dom"
import "./App.scss"
import Router from "./routes/PagesRoutes"
import './pages/Dashboard/Dashboard.scss'

const App = () => {
  return (
    <>
    

    <RouterProvider router={Router()} />
  
    </>
  )
}

export default App
