import { createContext, useEffect, useRef, useState } from "react"
import "../Common.scss"
import { useLocation, useParams } from "react-router-dom"
import moment from "moment"
import { useOdds } from "../useOdds/UseOdds"
import { tableIdtoUrl, titleById } from "../Constant/Constant"
import CasinoModal from "../CasinoBetSlip/Modal/CasinoModal"
// import CasinoHead from "../CasinoHead/CasinoHead"
import Video from "../Video/Video"
import T20 from "../T20/T20"
import AndarBaharKarna from "../andarBahar/AndarBaharKarna"
import DT20 from "../DT20/DT20"
import Aaa from "../aaa/Aaa"
import BTable from "../bollywoodTable/Btable"
// import T20Rule from "../T20/T20Rule"
import CasinoHeading from "../../Casino/CasinoHeading/CasinoHeading"
import { Box, Grid, Modal } from "@mui/material"
import Mybet from "../../LiveTennPatti/Mybet/Mybet"
import LastResult from "../../Casino/CasinoVideo/LastResult"
import CasinoBetPlace from "../../LiveTennPatti/CasinoBetPlace"
import { useGetIpfyQuery } from "../../../store/service/odds/oddsServices"
import { useGetCasinoBetPlacedMutation } from "../../../store/service/userServices/userServices"
import LoadingSpinner from "../../../component/LoadingSpinner/LoadingSpinner"
import snackbarUtil from "../../../utils/Snackbar"

const style = {
  position: "absolute" as "absolute",
  top: "18%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
}

export const globalContext = createContext({
  matchId: "",
  betDetails: null,
  setBetDetails: null,
  setBetPlace: null,
})

const CasinoMainPage = () => {
  const divRef = useRef(null)
  const [openModals, setOpenModals] = useState(false)

  // const handleOpen = () => setOpenModals(true);
  const handleClose = () => setOpenModals(false)

  const [openRulesModal, setOpenRulesModal] = useState(false)
  const [showBetSection, setShowBetSection] = useState(false)
  const [updated, setUpdated] = useState(0)

  const { id, tableId } = useParams<string>()
  const { odds } = useOdds(tableIdtoUrl[id])
  const t1 = odds?.t1?.[0]
  var curr = new Date()
  curr.setDate(curr.getDate() + 3)
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS")
  const [betState, setBetState] = useState({
    nation: "",
    casinoName: 0,
    isBack: true,
    odds: null,
    marketId: "",
    placeTime: pTime,
    selectionId: null,
    colorName: "",
    stake: 0,
    matchId: id,
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
  })

  const [trigger, { data, isLoading }] = useGetCasinoBetPlacedMutation()


  const { data: userIp } = useGetIpfyQuery()

  const { pathname } = useLocation()

  useEffect(() => {
    setShowBetSection(false)
  }, [pathname])

  useEffect(() => {
    if (!divRef.current) return
    const resizeObserver = new ResizeObserver(() => {
      window.parent?.postMessage(
        {
          type: "height",
          message: divRef.current?.clientHeight,
        },
        "*",
      )
    })
    resizeObserver.observe(divRef.current)
    return () => resizeObserver.disconnect()
  }, [divRef])

  useEffect(() => {
    setBetState(prev => ({
      ...prev,
      marketId: t1?.mid,
    }))
  }, [t1?.mid])


  useEffect(()=>{
    if(data){
      if(!data?.status){
        snackbarUtil.error(data?.message)
      }
      else{
        snackbarUtil.success(data?.message)
      }
    }
  }, [data])

  

  return (
    <>
      <CasinoModal
        size="sm"
        title="Rules"
        handleClose={() => setOpenRulesModal(false)}
        open={openRulesModal}
      >
        <img
          width="100%"
          className="rules_image"
          src={`/img/${id}-rules.jpg`}
          alt=""
        />
      </CasinoModal>

      <div className="mob-view-casino"></div>
      {isLoading?<LoadingSpinner />:""}

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className={`col-md-9 featured-box-detail sports-wrapper m-b-10`}>
              <div className="app_container">
                <div>
                  <CasinoHeading
                    HeadingName={{
                      name: `${titleById[id]}`,
                      roundId: ` ${t1?.mid}`,
                    }}
                    id={id}
                  />
                  {odds?.t1 && (
                    <Video
                      t3={odds && odds.t3}
                      t1={odds && odds?.t1?.[0]}
                    />
                  )}

                  {id == "51" && odds && (
                    <T20
                      setOpen={setOpenModals}
                      setShowBetSection={setShowBetSection}
                      t1={t1}
                      odds={odds}
                      setBetState={setBetState}
                      setUpdated={setUpdated}
                    />
                  )}
                  {id === "60" && odds && (
                    <AndarBaharKarna
                      setOpen={setOpenModals}
                      setShowBetSection={setShowBetSection}
                      setBetState={setBetState}
                      odds={odds}
                      setUpdated={setUpdated}
                    />
                  )}
                </div>

                {id == "52" && odds && (
                  <DT20
                    setShowBetSection={setShowBetSection}
                    setBetState={setBetState}
                    odds={odds}
                    setOpen={setOpenModals}
                    setUpdated={setUpdated}
                  />
                )}
                {id === "54" && odds && (
                  <Aaa
                    setShowBetSection={setShowBetSection}
                    setBetState={setBetState}
                    odds={odds}
                    setOpen={setOpenModals}
                    setUpdated={setUpdated}
                  />
                )}
                {id === "55" && odds && (
                  <BTable
                    setShowBetSection={setShowBetSection}
                    setBetState={setBetState}
                    odds={odds}
                    setOpen={setOpenModals}
                    setUpdated={setUpdated}
                  />
                )}

                <div className="mt-2">
                  {/* <LastResult matchId={t1?.mid[1]} /> */}
                  <LastResult />

                  {/* {id === "51" && <T20Rule />} */}
                </div>
              </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              marginTop: "-20px",
            }}
          >
            <Mybet tableId={tableId}/>
          </Box>
        </Grid>
      </Grid>

      <div
        id="sidebar-right"
        className="col-md-3 sidebar-right desk-view-casino"
        style={{ position: "relative", top: 0, right: 0, width: "25.5%" }}
      ></div>
      <Modal
        open={openModals}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="casino_betmodals">
          <CasinoBetPlace
            handleClose={handleClose}
            betState={betState}
            setBetState={setBetState}
            userIp={userIp?.ip}
            setOpenModals={setOpenModals}
            trigger={trigger}
            data={data}
            isLoading={isLoading}
          />
        </Box>
      </Modal>
    </>
  )
}

export default CasinoMainPage
