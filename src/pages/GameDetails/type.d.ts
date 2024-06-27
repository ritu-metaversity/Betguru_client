export interface BetPlaceInterface {
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
    mode: string
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