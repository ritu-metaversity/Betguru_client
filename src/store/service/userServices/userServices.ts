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
  BetListReq,
  BetListRes,
  BetPlacedRes,
  BetplacedReq,
  ChangePaaReq,
  ChangePaaRes,
  FancyBookRes,
  LedgerBody,
  LedgerDataRes,
  LedgerDetailsReq,
  LedgerDetailsRes,
  LedgerListData,
  LedgerPaylod,
  LedgerReq,
  LogOutRes,
  OddsResponse,
  SessionPlusMinusRes,
  UserBalance,
  UserCreateBody,
  UserCreateRequestBody,
  UserCreateResBody,
  UserDetailsUpdateReq,
  UserDetailsUpdateRes,
  UserPassRequest,
  UserPassResponse,
  UserProfile,
  UserRequestBody,
  UserResponse,
  casinoResponse,
  fancyBookreq,
  healthRes,
  rateDeffReq,
  rateDeffRes,
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
    LogOut: build.mutation<LogOutRes, void>({
      query: (body) => ({
        url: "/login/logout",
        method: "POST",
        body,
      }),
    }),
    userMessage: build.mutation<LogOutRes, void>({
      query: (body) => ({
        url: "/message/get-message",
        method: "POST",
        body,
      }),
    }),
    betPlaced: build.mutation<BetPlacedRes, BetplacedReq>({
      query: (body) => ({
        url: "/bet/place",
        method: "POST",
        body,
      }),
    }),
    UpdateRate: build.mutation<rateDeffRes, rateDeffReq>({
      query: (body) => ({
        url: "/enduser/update-rate-difference",
        method: "POST",
        body,
      }),
    }),
    UserCahngePassword: build.mutation<UserPassResponse, UserPassRequest>({
      query: (body) => ({
        url: "/user/changepassword-self",
        method: "POST",
        body,
      }),
    }),
    casinoList: build.query<casinoResponse, void>({
      query: () => ({
        url: "/casino/casino-list",
        method: "POST",
      }),
    }),
    getUserBalance: build.mutation<UserBalance, void>({
      query: () => ({
        url: "/enduser/get-balance",
        method: "POST",
      }),
    }),
    healthCheck: build.mutation<healthRes, void>({
      query: () => ({
        url: `/health-check`,
        method: "GET",
      }),
    }),
    getBetListBymatchId: build.query<BetListRes, BetListReq>({
      query: (body) => ({
        url: `/enduser/bet-list-by-matchid`,
        method: "POST",
        body
      }),
    }),
    getOddsPnl: build.query<OddsResponse, BetListReq>({
      query: (body) => ({
        url: `/enduser/user-odds-pnl`,
        method: "POST",
        body
      }),
    }),
    getSessionPlusMinus: build.query<SessionPlusMinusRes, BetListReq>({
      query: (body) => ({
        url: `/enduser/session-plus-minus-user-eventpage`,
        method: "POST",
        body
      }),
    }),
    getLedgerDetails: build.mutation<LedgerDataRes, {}>({
      query: (body) => ({
        url: `/enduser/ledger`,
        method: "POST",
        body
      }),
    }),
    getLedgerBetDetails: build.mutation<LedgerListData, LedgerReq>({
      query: (body) => ({
        url: `/enduser/get-enduser-bet-detail`,
        method: "POST",
        body
      }),
    }),
    getFancyBook: build.mutation<FancyBookRes, fancyBookreq>({
      query: (body) => ({
        url: `/enduser/fancy-book`,
        method: "POST",
        body
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
  useLedgerDetailsMutation,
  useLogOutMutation,
  useUserMessageMutation,
  useBetPlacedMutation, 
  useUpdateRateMutation, 
  useUserCahngePasswordMutation,
  useCasinoListQuery, 
  useGetUserBalanceMutation,
  useHealthCheckMutation,
  useGetBetListBymatchIdQuery,
  useGetOddsPnlQuery,
  useGetLedgerDetailsMutation,
  useGetLedgerBetDetailsMutation,
  useGetSessionPlusMinusQuery,
  useGetFancyBookMutation
} = userList;
