export interface BetPlaceInterface {
    isFancy: boolean
    isBack: boolean
    odds: number
    stake: number
    marketName: string
    selectionId: number
    priceValue: number
    placeTime: string
    marketId: string
    matchId: string
    name: string
    userIp: string
    deviceInfo: DeviceInfo
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