import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./index.scss"
import { store } from "./store/store"
import { SnackbarProvider } from "notistack"
import { SnackbarUtilsConfigurator } from "./utils/Snackbar"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <SnackbarProvider
      maxSnack={2}
      autoHideDuration={1500}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Provider store={store}>
        <App />
        <SnackbarUtilsConfigurator />
      </Provider>
    </SnackbarProvider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
