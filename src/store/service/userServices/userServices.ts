import type {
  BaseQueryFn,
  FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {
  createApi
} from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "../dynamicBaseQuery";
import type {
  ActiveUserReq,
  ActiveUserRes,
  ChangePaaReq,
  ChangePaaRes,
  LedgerBody,
  LedgerDetailsReq,
  LedgerDetailsRes,
  LedgerPaylod,
  UserCreateBody,
  UserCreateRequestBody,
  UserCreateResBody,
  UserDetailsUpdateReq,
  UserDetailsUpdateRes,
  UserProfile,
  UserRequestBody,
  UserResponse,
  useNameRequest,
  useNameRes,
} from "./user";

export const userList = createApi({
  reducerPath: "userList",
  baseQuery: dynamicBaseQuery as BaseQueryFn<
    string | { url: string; method: string; body?: any },
    unknown,
    FetchBaseQueryError
  >,
  endpoints: (build) => ({
    userList: build.mutation<UserResponse, UserRequestBody>({
      query: (body) => ({
        url: "/user/list-user",
        method: "POST",
        body,
      }),
    }),
    userName: build.mutation<useNameRes, useNameRequest>({
      query: (body) => ({
        url: "/user/username-id-search",
        method: "POST",
        body,
      }),
    }),
    userDetailForEdit: build.mutation<useNameRes, UserCreateRequestBody>({
      query: (body) => ({
        url: "/user/get-detail-for-user-creation",
        method: "POST",
        body,
      }),
    }),
    userCreate: build.mutation<UserCreateResBody, UserCreateBody>({
      query: (body) => ({
        url: "/user/create",
        method: "POST",
        body,
      }),
    }),
    userProfile: build.mutation<UserProfile, void>({
      query: () => ({
        url: "/enduser/get-self-profile",
        method: "POST",
      }),
    }),
    ChangePassword: build.mutation<ChangePaaRes, ChangePaaReq>({
      query: (body) => ({
        url: "/user/changepassword-self",
        method: "POST",
        body,
      }),
    }),
    userDetailEdit: build.mutation<UserDetailsUpdateRes, UserDetailsUpdateReq>({
      query: (body) => ({
        url: "/user/user-detail-for-edit",
        method: "POST",
        body,
      }),
    }),
    userActive: build.mutation<ActiveUserRes, ActiveUserReq>({
      query: (body) => ({
        url: "/user/activate-deactivate-user",
        method: "POST",
        body,
      }),
    }),
    LedgerDepositWidthdraw: build.mutation<LedgerBody, LedgerPaylod>({
      query: (body) => ({
        url: "/ledger/ledger-dep-wid",
        method: "POST",
        body,
      }),
    }),
    LedgerDetails: build.mutation<LedgerDetailsRes, LedgerDetailsReq>({
      query: (body) => ({
        url: "/ledger/get-ledger-cash-trans-userid",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useUserListMutation,
  useUserNameMutation,
  useUserDetailForEditMutation,
  useUserCreateMutation,
  useUserProfileMutation,
  useChangePasswordMutation,
  useUserDetailEditMutation,
  useUserActiveMutation,
  useLedgerDepositWidthdrawMutation,
  useLedgerDetailsMutation
} = userList;
