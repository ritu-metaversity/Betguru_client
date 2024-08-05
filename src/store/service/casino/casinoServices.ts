import type {
    BaseQueryFn,
    FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
  import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";

  
  export const casinoData = createApi({
    reducerPath: "casinoData",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_ODDS_API,
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
      casinoResult: build.query<CasinoResponse[], void>({
        query: (arge) => ({
          url: `/betfair_api/casino/result/meta-${arge}`,
          method: "GET",
          
        }),
      }),
      
    }),
  });
  
  export const {
    useCasinoResultQuery,
  } = casinoData;
  