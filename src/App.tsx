import { RouterProvider } from "react-router-dom"
import "./App.scss"
import Router from "./routes/PagesRoutes"
import "./pages/Dashboard/Dashboard.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <RouterProvider router={Router()} />
    </>
  )
}

export default App
