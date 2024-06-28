import type { FC } from "react"
import { useEffect, useState } from "react"
import "./GameDetails.scss"
import GameHeader from "./GameHeader/GameHeader"
import Scorecard from "./Score/Scorecard"
import NewMode from "./NewMode/NewMode"
import ClassicMode from "./ClassicMode/ClassicMode"
import PlaceBetModal from "./PlaceBetModal/PlaceBetModal"
import type { BetPlaceInterface } from "./type"
import {
  useGetIpfyQuery,
  useOddsDataQuery,
} from "../../store/service/odds/oddsServices"
import { useParams } from "react-router-dom"
import moment from "moment"
import GameInfoTab from "./GameInfoTab"
import { listenToThemeChange } from "../../utils/themeEvent"
import SessionBets from "./NewMode/SessionBets"
import { Grid } from "@mui/material"
import SessionBetForClasic from "./ClassicMode/SessionBetForClasic"
import {
  useGetBetListBymatchIdMutation,
  useGetOddsPnlMutation,
} from "../../store/service/userServices/userServices"
import snackbarUtil from "../../utils/Snackbar"

interface Bet {
  nation: string
  rate: number
  amount: number
  priveValue: number
  marketName: string
  betTime: string
  pnl: number
  back: boolean
}

interface BetList {
  [key: string]: Bet[]
}

interface BetListRes {
  data: BetList
}

interface Props {
  setHederName: React.Dispatch<React.SetStateAction<string>>
}

const GameDetails: FC<Props> = ({ setHederName }) => {
  const [isClassicMode, setIsClassicMode] = useState<boolean>(false)
  const [betPlace, setBetPlace] = useState<boolean>(false)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [placeBetData, setPlaceBetData] = useState<BetPlaceInterface>({
    isFancy: false,
    isBack: false,
    odds: 0,
    stake: 0,
    marketName: "",
    selectionId: 0,
    priceValue: 0,
    placeTime: "",
    marketId: "",
    matchId: "",
    name: "",
    userIp: "",
    mode: "",
    deviceInfo: null,
  })
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("app-theme") || "default-theme2",
  )
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useOddsDataQuery(id, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  })
  const [getBetList, { data: betList }] = useGetBetListBymatchIdMutation()
  const [getOddsPnl, { data: oddsPnl }] = useGetOddsPnlMutation()
  const { data: userIp } = useGetIpfyQuery()

  useEffect(() => {
    listenToThemeChange(setThemeColor)
  }, [])

  const handleOpen = (
    isFancy: boolean,
    isBack: boolean,
    odds: number,
    marketName: string,
    selectionId: string,
    priceValue: number,
    marketId: string,
    name: string,
    mode: string,
    date: any,
  ) => {
    if (!id || !userIp) return
    setPlaceBetData(prev => ({
      ...prev,
      isFancy,
      isBack,
      odds,
      marketName,
      selectionId:  !isFancy?selectionId :0,
      priceValue: isFancy ? priceValue : odds,
      marketId: isFancy?selectionId:marketId,
      name,
      matchId: id,
      userIp: userIp?.ip,
      mode,
      placeTime: moment(date).format("YYYY-MM-DD HH:mm:ss.SSS"),
      deviceInfo: {
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        browser: "Chrome",
        device: "Macintosh",
        deviceType: "desktop",
        os: "Windows",
        os_version: "windows-10",
        browser_version: "108.0.0.0",
        orientation: "landscape",
      },
    }))
    if (odds === 0) {
      snackbarUtil.error("Rate must be grater than zero")
    } else {
      setOpen(true)
    }
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (data) {
      if (data?.Odds) {
        setHederName(data?.Odds[0]?.matchName)
      }
    }
  }, [data])

  useEffect(() => {
    if (id) {
      getBetList({ matchId: id })
      getOddsPnl({ matchId: id })
    }
  }, [id, betPlace])

  const handleClick = (id: number) => {
    setValue(id)
  }

  const oddsPnlData = oddsPnl?.data?.[0]
    ? {
        [oddsPnl?.data?.[0].selection1]: oddsPnl?.data?.[0].pnl1,
        [oddsPnl?.data?.[0].selection2]: oddsPnl?.data?.[0].pnl2,
        [oddsPnl?.data?.[0].selection3]: oddsPnl?.data?.[0].pnl3,
      }
    : {}

  // console.log(oddsPnlData, "oddsPnlDataoddsPnlData")

  return (
    <>
      {!isClassicMode && (
        <GameInfoTab value={value} handleClick={handleClick} />
      )}
      {value === 0 ? (
        <>
          {!isClassicMode ? (
            <div className="main_game" style={{
              marginBottom:"55px"
            }}>
              <div className="mt-2 tab-content">
                <div className="tab-pane fade active show" id="ngb-nav-2-panel">
                  <div>
                    <GameHeader data={data?.Odds} />
                    <Grid container >
                      <Grid item md={8} className="scoreBackground">
                        <div className="px-4 pt-4 column-full">
                          <Scorecard
                            setIsClassicMode={setIsClassicMode}
                            isClassicMode={isClassicMode}
                            id={id}
                            claName="new_mod"
                          />
                          <NewMode
                            handleOpen={handleOpen}
                            data={data}
                            oddsPnlData={oddsPnlData}
                          />
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div
                          className="session_bets column-full mobileHide"
                          style={{ backgroundColor: "#f1f0f5" }}
                        >
                          {betList &&
                            Object.keys(betList.data).map((key, index) => (
                              <SessionBets
                                key={index}
                                betList={betList.data[key]}
                                title={key}
                              />
                            ))}
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`old-match-component ${themeColor}2`}>
              <Scorecard
                setIsClassicMode={setIsClassicMode}
                isClassicMode={isClassicMode}
                id={id}
                claName="clasic_mod"
              />
              <ClassicMode
                handleOpen={handleOpen}
                data={data}
                oddsPnlData={oddsPnlData}
              />
              {betList &&
                Object.keys(betList.data).map((key, index) => (
                  <SessionBetForClasic
                    key={index}
                    betList={betList.data[key]}
                    title={key}
                  />
                ))}
            </div>
          )}
        </>
      ) : (
        <div className="session_bets">
          {betList &&
            Object.keys(betList.data).map((key, index) => (
              <SessionBets
                key={index}
                betList={betList.data[key]}
                title={key}
              />
            ))}
        </div>
      )}

      <PlaceBetModal
        onClose={handleClose}
        open={open}
        placeBetData={placeBetData}
        setPlaceBetData={setPlaceBetData}
        setBetPlace={setBetPlace}
      />
    </>
  )
}

export default GameDetails
