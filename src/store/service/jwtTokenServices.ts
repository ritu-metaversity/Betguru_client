import type { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

// Define the types for the expected response and query parameters
interface JwtTokenResponse {
  valid: boolean;
  exp: number;
  // add other fields as necessary
}

interface JwtTokenQueryArgs {
  // define any arguments that the query might accept
}

export const jwtApi = createApi({
  reducerPath: "jwtApi",
  baseQuery: dynamicBaseQuery as BaseQueryFn<JwtTokenQueryArgs, any, FetchBaseQueryError>,
  endpoints: (build) => ({
    jwtToken: build.query<JwtTokenResponse, void>({
      query: () => ({
        url: `/util/validate-jwt-token`,
        method: "POST",
      }),
    }),
  }),
});

export const { useJwtTokenQuery } = jwtApi;
