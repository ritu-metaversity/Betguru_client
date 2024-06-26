import type {
    BaseQueryFn,
    FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
  import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
import type { matchedData, oddsResponse } from "./odds";
  
  export const oddsData = createApi({
    reducerPath: "oddsData",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://oddsapi.247idhub.com",
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
      activeMatch: build.mutation<matchedData, void>({
        query: () => ({
          url: "/betfair_api/active_match/4",
          method: "GET",
          
        }),
      }),
      oddsData: build.query<oddsResponse, string | undefined>({
        query: (agrs) => ({
          url: `/betfair_api/fancy/${agrs}`,
          method: "GET",
        }),
      }),
      
    }),
  });
  
  export const {
    useActiveMatchMutation,
    useOddsDataQuery
  } = oddsData;
  