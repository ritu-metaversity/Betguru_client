import type { FC } from "react"
import { useEffect, useState } from "react"
import "./GameDetails.scss"
import GameHeader from "./GameHeader/GameHeader"
import Scorecard from "./Score/Scorecard"
import NewMode from "./NewMode/NewMode"
import ClassicMode from "./ClassicMode/ClassicMode"
import PlaceBetModal from "./PlaceBetModal/PlaceBetModal"
import CloseIcon from "@mui/icons-material/Close"
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
import {
  Box,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import SessionBetForClasic from "./ClassicMode/SessionBetForClasic"
import {
  useGetBetListBymatchIdQuery,
  useGetFancyBookMutation,
  useGetOddsPnlQuery,
  useGetSessionPlusMinusQuery,
} from "../../store/service/userServices/userServices"
import snackbarUtil from "../../utils/Snackbar"
import Marquee from "react-fast-marquee"

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

interface Props {
  setHederName: React.Dispatch<React.SetStateAction<string>>
  getUserBalance: any
}

const style1 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
}


const GameDetails: FC<Props> = ({ setHederName, getUserBalance }) => {
  const [isClassicMode, setIsClassicMode] = useState<boolean>(false)
  const [betPlace, setBetPlace] = useState<boolean>(false)
  const [openFancyBook, setOpenFancyBook] = useState(false)

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
    localStorage.getItem("app-theme") || "purple-theme2",
  )
  const { id } = useParams<{ id: string }>()


  const { data } = useOddsDataQuery(id, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  })
  const { data: betList } = useGetBetListBymatchIdQuery(
    { matchId: id || "" },
    { pollingInterval: 5000, refetchOnMountOrArgChange: true },
  )
  const { data: oddsPnl } = useGetOddsPnlQuery(
    { matchId: id || "" },
    { pollingInterval: 1000, refetchOnMountOrArgChange: true },
  )
  const { data: sessionPlus } = useGetSessionPlusMinusQuery(
    { matchId: id || "" },
    { pollingInterval: 2000, refetchOnMountOrArgChange: true },
  )

  const [trigger, { data: fancyBook }] = useGetFancyBookMutation()


  console.log(fancyBook, "fancyBookfancyBook")

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
      selectionId: !isFancy ? selectionId : 0,
      priceValue: isFancy ? priceValue : odds,
      marketId: isFancy ? selectionId : marketId,
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

  const handleClick = (id: number) => {
    setValue(id)
  }

  const handleOpenFancyBook = (fancyId: any) => {
    trigger({
      matchId: id || "",
      fancyId: fancyId,
    })
    setOpenFancyBook(true)
  }
  const handleCloseFancyBook = () => setOpenFancyBook(false)

  const oddsPnlData = oddsPnl?.data?.[0]
    ? {
        [oddsPnl?.data?.[0].selection1]: oddsPnl?.data?.[0].pnl1,
        [oddsPnl?.data?.[0].selection2]: oddsPnl?.data?.[0].pnl2,
        [oddsPnl?.data?.[0].selection3]: oddsPnl?.data?.[0].pnl3,
      }
    : {}

  return (
    <>
      {!isClassicMode && (
        <GameInfoTab value={value} handleClick={handleClick} />
      )}
      {value === 0 ? (
        <>
          {!isClassicMode ? (
            <div
              className="main_game"
              style={{
                marginBottom: "55px",
              }}
            >
              <div className="mt-2 tab-content">
                <div className="tab-pane fade active show" id="ngb-nav-2-panel">
                  <div>
                    <GameHeader
                      data={data?.Odds}
                      display={data?.Odds[0]?.display_message}
                    />
                    <Grid container>
                      <Grid item md={8} className="scoreBackground">
                        <div className="px-4 pt-4 column-full">
                          <div className="deskHide">
                            <Marquee className="color_change">
                              {data?.Odds[0]?.display_message}
                            </Marquee>
                          </div>

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
                            sessionBetPnl={sessionPlus?.data?.sessionPlusMinus}
                            handleOpenFancyBook={handleOpenFancyBook}
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
                display={data?.Odds[0]?.display_message}
              />
              <ClassicMode
                handleOpen={handleOpen}
                data={data}
                oddsPnlData={oddsPnlData}
                sessionBetPnl={sessionPlus?.data?.sessionPlusMinus}
                handleOpenFancyBook={handleOpenFancyBook}
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
        <div
          className="session_bets column-full"
          style={{ backgroundColor: "#f1f0f5", marginBottom: "120px" }}
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
      )}
      <PlaceBetModal
        getUserBalance={getUserBalance}
        onClose={handleClose}
        open={open}
        placeBetData={placeBetData}
        setPlaceBetData={setPlaceBetData}
        setBetPlace={setBetPlace}
      />

      <Modal
        open={openFancyBook}
        onClose={handleCloseFancyBook}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1} className="fancybokk">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "black",
              color: "#fff",
              p: 1,
            }}
          >
            <Typography
              component={"h2"}
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Run Amount
            </Typography>
            <CloseIcon  onClick={handleCloseFancyBook}/>
          </Box>
          <TableContainer
            sx={{
              p: 4,
              height: "612px",
              overflowY: "scroll",
              overflowX:"hidden",
              width:"unset"
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Run</TableCell>
                  <TableCell align="left">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fancyBook?.data !== null ? fancyBook?.data?.map((row, id) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th">{row?.odds}</TableCell>
                    <TableCell align="left" sx={{
                      color: row.pnl > 0 ? "green" : "red",
                    }}>{row.pnl}</TableCell>
                  </TableRow>
                )):<div style={{
                  textAlign:"center",
                  fontSize:"15px",
                  margin:"12px"
                }}>No Data Fount</div>}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </>
  )
}

export default GameDetails
