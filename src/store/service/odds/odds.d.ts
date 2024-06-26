export interface matchedData {
    status: boolean
    message: string
    data: matList[]
  }
    
  export interface matList {
    matchName: string
    matchId: number
    marketId: string
    openDate: string
    maxBet: number
    minBet: number
    maxBetRate: number
    minBetRate: number
    inPlay: boolean
    team1Back: number
    team1Lay: number
    team2Back: number
    team2Lay: number
    drawBack: number
    drawLay: number
    bm: boolean
    F: boolean
    GM: boolean
    SM: boolean
    channelId: any
  }


  export interface oddsResponse {
    Odds: Odd[]
    Bookmaker: Bookmaker[]
    Fancy: any[]
    Fancy2: Fancy2[]
    Fancy3: any[]
    Khado: any[]
    Ball: any[]
    Meter: any[]
    OddEven: any[]
    BallByBall: any[]
  }
  
  export interface Odd {
    runners: Runner[]
    matchName: string
    marketId: string
    isMarketDataDelayed: boolean
    status: string
    inplay: boolean
    Name: string
    eventTime: string
    lastMatchTime: string
    maxBetRate: number
    minBetRate: number
    betDelay: number
    maxBet: number
    minBet: number
    betlock: boolean
    display_message: string
  }
  
  export interface Runner {
    name: string
    selectionId: string
    runnerStatus: string
    ex: Ex
  }
  
  export interface Ex {
    availableToBack: AvailableToBack[]
    availableToLay: AvailableToLay[]
  }
  
  export interface AvailableToBack {
    price: number
    size: number
  }
  
  export interface AvailableToLay {
    price: number
    size: number
  }
  
  export interface Bookmaker {
    mid: string
    t: string
    sid: string
    nation: string
    b1: number
    bs1: number
    l1: number
    ls1: number
    gstatus: string
    matchName: string
    maxBetRate: number
    minBetRate: number
    betDelay: number
    maxBet: number
    minBet: number
    betlock: boolean
    display_message: string
  }
  
  export interface Fancy2 {
    mid: string
    t: string
    sid: string
    nation: string
    b1: number
    bs1: number
    l1: number
    ls1: number
    gstatus: string
    maxBet: number
    minBet: number
    betDelay: number
    isCommissionAllowed: boolean
    srno: string
  }
  
  