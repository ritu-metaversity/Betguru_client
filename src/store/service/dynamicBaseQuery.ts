import {fetchBaseQuery, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {type BaseQueryFn, type FetchArgs,type FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";

export const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://20.83.184.40:7050",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("client-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions as FetchBaseQueryMeta);
  if (result?.error) {
    const status = result.error.status;
    // if (status === 401) {
    //   localStorage.clear();
    //   window.location.replace("/");
    // }
  }
  return result;
};
