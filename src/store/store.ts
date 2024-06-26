import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./service/authService";
import { userList } from "./service/userServices/userServices";
import { oddsData } from "./service/odds/oddsServices";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userList.reducerPath]: userList.reducer,
    [oddsData.reducerPath]: oddsData.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware()
      .concat(authApi.middleware)
      .concat(userList.middleware)
      .concat(oddsData.middleware)
});
