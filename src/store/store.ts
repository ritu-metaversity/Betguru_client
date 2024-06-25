import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./service/authService";
import { userList } from "./service/userServices/userServices";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userList.reducerPath]: userList.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware()
      .concat(authApi.middleware)
      .concat(userList.middleware)
});
