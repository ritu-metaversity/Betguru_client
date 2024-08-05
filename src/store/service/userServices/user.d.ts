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
  status: boolean
  message: null | string
  data: {
    userId: string
    username: string
    contact: string
    dateOfJoining: string
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
interface LogOutRes {
  status: boolean
  message: string
  data: null
}
export interface BetplacedReq {
  isFancy: boolean
  isBack: boolean
  odds: number
  stake: number
  marketName: string
  selectionId: number | string
  priceValue: number
  placeTime: string
  marketId: string
  matchId: string
  name: string
  userIp: string
  deviceInfo: DeviceInfo | null
}

export interface DeviceInfo {
  userAgent: string
  browser: string
  device: string
  deviceType: string
  os: string
  os_version: string
  browser_version: string
  orientation: string
}

export interface BetPlacedRes {
  message: string
  status: boolean
}

export interface rateDeffReq {
  rateDifference: number
}
export interface rateDeffRes {
  status: boolean
  message: string
  data: null
}
export interface UserPassRequest {
  currentPassword: string
  newPassword: string
}
export interface UserPassResponse {
  status: boolean
  message: string
  data: null
}
export interface casinoResponse {
  status: boolean
  message: string
  data: Casino[]
}
export interface Casino {
  tableId: string | number | readonly string[] | undefined
  name: string
  image: string
  id: string
}

export interface UserBalance {
  status: boolean
  message: string | null
  data: { balance: number }
}

export interface healthRes {
  status: boolean
  message: string
}

export interface BetListReq {
  matchId: string
}
export interface BetListRes {
  status: boolean
  message: null
  data: BetList
}

interface BetList {
  [key: string]: Bet[]
}

export interface Bet {
  sid: any
  nation: string
  rate: number
  amount: number
  priveValue: number
  marketName: string
  betTime: string
  pnl: number
  back: boolean
}

export interface OddsResponse {
  status: boolean
  message: null
  data: OdssPnl[]
}

interface SessionPlusMinusRes {
  status: boolean
  message: null
  data: {
    sessionPlusMinus: number
  }
}

export interface OdssPnl {
  marketId: string
  pnl1: number
  pnl2: number
  pnl3: number
  selection1: number
  selection2: number
  selection3: number
}

interface LedgerDataRes {
  status: boolean
  message: null
  data: DataLedger[]
}
interface LedgerReq {
  matchId: number
}

interface DataLedger {
  date: string
  time: string
  remark: string
  wonBy: string
  won: string
  lost: string
  balance: number
  matchId: number
}

interface LedgerListData {
  status: boolean
  message: null
  data: Data123
}

interface Data123 {
  date: string
  wonBy: null
  matchBet: number
  sessionBet: number
  matchWon: number
  sessionWon: number
  totalWon: number
  matchBets: MatchBet12[]
  sessionBets: SessionBet12[]
}

interface SessionBet12 {
  selectionName: string
  rate: number
  amount: number
  run: number
  mode: string
  declared?: number
}

interface MatchBet12 {
  selectionName: string
  rate: number
  amount: number
  mode: string
}

interface fancyBookreq {
  matchId: string
  fancyId: string
}

interface FancyBookRes {
  status: boolean
  message: null
  data: FancyData[]
}

interface FancyData {
  odds: number
  pnl: number
}

interface mybetRequest {
  tableId: number | string
  isGameCompleted: boolean
  sportId:number
}

interface CasinoBetPlacePaylod {
  casinoName: number
  colorName: string
  isBack: boolean
  marketId: string
  nation: string
  odds: number
  placeTime:string
  selectionId: string
  stake: number
  userIp: string
  diviceInfo:DeviceInfo
}


interface mybetResponce {
  status: boolean;
  message: null;
  data: mybet[];
}

interface mybet {
  id: number;
  gameName: string;
  roundId: string;
  stake: number;
  odds: number;
  result: null;
  pnl: number;
  date: null;
  selectionName: string;
}