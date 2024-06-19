import { RouterProvider } from "react-router-dom"
import "./App.scss"
import Router from "./routes/PagesRoutes"


const App = () => {
  return (
    <>
    <RouterProvider router={Router()} />
    </>
  )
}

export default App
