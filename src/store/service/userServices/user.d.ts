interface UserRequestBody {
  userType: number
  noOfRecords: number
  index: number
}

interface UserList {
  userId: string
  userName: string
  mobile: string
  password: string
  balance: number
  matchCommission: number
  sessionCommission: number
  share: number
  userStatus: boolean
  parentId: string
}
interface UserResponse {
  data: UserList[]
}

interface useNameRequest {
  userType: number
}
interface useName {
  useriId: string
  username: string
}
interface useNameRes {
  data: useName[]
}

interface UserCreateRequestBody {
  userId: string
}
interface UserCreateList {
  data: {
    commissionType: string
    mobileAppCharge: number
    myCasinoCommission: number
    myCasinoPartnership: number
    myIntlCasinoPartnership: number
    myMatchCommission: number
    myPartnership: number
    mySessionCommision: number
  }
}

interface UserCreateResponseBody {
  data: UserCreateList
}

interface UserCreateBody {
  username: string
  reference: string
  password: string
  contact: string
  mobileAppCharge: string
  partnership: null | number
  casinoPartnership: null | number
  internationalCasinoPartnership: null | number
  commissionType: null | number
  matchCommission: null | number
  sessionCommission: null | number
  casinoCommission: null | number
}
interface UserCreateResBody {
  message(message: any): unknown
  status: any
  data: {
    userId: string
    password: string
  }
}

interface UserProfile {
  status: boolean;
  message: null | string;
  data: {
    userId: string;
    username: string;
    contact: string;
    dateOfJoining:string;
    address: string
    helpline: string
    rateDifference: number
  }
}
export interface ChangePaaReq {
  currentPassword: string
  newPassword: string
}
interface ChangePaaRes {
  status: boolean
  message: string
  data: null
}
interface UserDetailsUpdateReq {
  userId: string
}
export interface UserDetailsUpdateRes {
  status: boolean
  message: null
  data: {
    userId: string
    userName: string
    reference: string
    password: string
    contact: string
    flatShare: boolean
    casinoPlay: boolean
    mobileAppCharge: number
    adminPartnership: number
    adminCasinoPartnership: number
    adminIntlCasinoPartnership: number
    adminMatchCommission: number
    adminSessionCommision: number
    adminCasinoCommission: number
    myPartnership: number
    myCasinoPartnership: number
    myIntlCasinoPartnership: number
    myMatchCommission: number
    mySessionCommision: number
    myCasinoCommission: number
  }
}

interface ActiveUserReq {
  userId: string
  activate: boolean
}
interface ActiveUserRes {
  status: boolean
  message: string
  data: null
}

interface LedgerPaylod {
  userId: string
  amount: number
  collection: string
  paymentType: string
  remark: string
}
interface LedgerBody {
  status: boolean
  message: string
  data: null
}
interface LedgerDetailsReq {
  userId: string
}
interface LedgerDetail {
  date: string | null
  collectionName: string
  paymentType: string
  remark: string
  credit: number
  debit: number
  balance: number
}

interface LedgerDetailsRes {
  status: boolean
  message: string | null
  data: LedgerDetail[]
}
