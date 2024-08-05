import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./service/authService"
import { userList } from "./service/userServices/userServices"
import { oddsData } from "./service/odds/oddsServices"
import { stackData } from "./service/stackServices/steckServices"
import global from "./global/slice"
import { casinoData } from "./service/casino/casinoServices"

export const store = configureStore({
  reducer: {
    global,
    [authApi.reducerPath]: authApi.reducer,
    [userList.reducerPath]: userList.reducer,
    [oddsData.reducerPath]: oddsData.reducer,
    [stackData.reducerPath]: stackData.reducer,
    [casinoData.reducerPath]: casinoData.reducer,
  },
  middleware: defaultMiddleware =>
    defaultMiddleware()
      .concat(authApi.middleware)
      .concat(userList.middleware)
      .concat(oddsData.middleware)
      .concat(stackData.middleware)
      .concat(casinoData.middleware),
})
