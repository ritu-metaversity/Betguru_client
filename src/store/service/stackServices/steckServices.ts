// https://adminapi.247idhub.com/admin-new-apis/enduser/get-stake-button


import type {
    BaseQueryFn,
    FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
  import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
import type { stackRes } from "../odds/odds";
  
  export const stackData = createApi({
    reducerPath: "stackData",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://adminapi.247idhub.com/admin-new-apis",
        prepareHeaders: (headers) => {
          const token = localStorage.getItem("client-token");
          if (token) {
            headers.set("Authorization", `Bearer ${token}`);
          }
          return headers;
        },
      }) as BaseQueryFn<
      string | { url: string; method: string; body?: any },
      unknown,
      FetchBaseQueryError
    >,
    endpoints: (build) => ({
      getStackValue: build.query<stackRes, void>({
        query: () => ({
          url: "/enduser/get-stake-button",
          method: "GET",
          
        }),
      }),
    }),
  });
  
  export const {
    useGetStackValueQuery,
  } = stackData;
  