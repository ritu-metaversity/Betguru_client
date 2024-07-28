import { createContext, useEffect, useRef, useState } from "react"
import "../Common.scss"
import { useLocation, useParams } from "react-router-dom"
import moment from "moment"
import { useOdds } from "../useOdds/UseOdds"
import { tableIdtoUrl, titleById } from "../Constant/Constant"
import CasinoModal from "../CasinoBetSlip/Modal/CasinoModal"
import CasinoHead from "../CasinoHead/CasinoHead"
import Video from "../Video/Video"
import T20 from "../T20/T20"
import AndarBaharKarna from "../andarBahar/AndarBaharKarna"
import DT20 from "../DT20/DT20"
import Aaa from "../aaa/Aaa"
import BTable from "../bollywoodTable/Btable"
import T20Rule from "../T20/T20Rule"
import CasinoHeading from "../../Casino/CasinoHeading/CasinoHeading"
import { Box, Grid, Modal } from "@mui/material"
import Mybet from "../../LiveTennPatti/Mybet/Mybet"
import LastResult from "../../Casino/CasinoVideo/LastResult"
import CasinoBetPlace from "../../LiveTennPatti/CasinoBetPlace"

const style = {
  position: 'absolute' as 'absolute',
  top: '18%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
};

const defaultStake = {
  stack1: 0,
  stack2: 0,
  stack3: 0,
  stack4: 0,
  stack5: 0,
  stack6: 0,
  stack7: 0,
  stack8: 0,
  stack9: 0,
  stack10: 0,
}

export const globalContext = createContext({
  matchId: "",
  stakes: defaultStake,
  betDetails: null,
  setBetDetails: null,
  setBetPlace: null,
})

const CasinoMainPage = () => {
  const divRef = useRef(null)
  const [openModals, setOpenModals] = useState(false);
  const handleOpen = () => setOpenModals(true);
  const handleClose = () => setOpenModals(false);
  const [openRulesModal, setOpenRulesModal] = useState(false)
  const [showBetSection, setShowBetSection] = useState(false)
  const [updated, setUpdated] = useState(0)
  const [open, setOpen] = useState(false)
  const { id } = useParams<string>()
  const [ActiveNavbar, setActiveNavBar] = useState(1)
  const { odds, setBetPlace } = useOdds(tableIdtoUrl[id])
  const t1 = odds?.data?.t1?.[0]
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
    colorName: "back",
  })

  // useEffect(() => {
  //   GameAPI.Get_Stack_Value().then((res) => {
  //     setStakes(res);
  //   });
  // }, []);

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

      <div className="mob-view-casino">
        {/* <CasinoHead
          t1={t1}
          ActiveNavbar={ActiveNavbar}
          setOpenRulesModal={setOpenRulesModal}
          setActiveNavBar={setActiveNavBar}
        /> */}
      </div>

      {/* <div
        ref={divRef}
        className={`${window.innerWidth < 800 ? "" : "row"} row5`}
      > */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className={`col-md-9 featured-box-detail sports-wrapper m-b-10`}>
            {ActiveNavbar == 1 ? (
              <div className="app_container">
                <div>
                  <CasinoHeading
                    HeadingName={{
                      name: `${titleById[id]}`,
                      roundId: ` ${t1?.mid?.split(".")[1]}`,
                    }}
                  />
                  {odds?.data?.t1 && (
                    <Video
                      t3={odds && odds.data.t3}
                      t1={odds && odds?.data?.t1?.[0]}
                    />
                  )}

                  {id == "51" && odds && (
                    <T20
                      setOpen={setOpen}
                      setShowBetSection={setShowBetSection}
                      t1={t1}
                      odds={odds}
                      setUpdated={setUpdated}
                      
                    />
                  )}
                  {id === "60" && odds && (
                    <AndarBaharKarna
                      setOpen={setOpen}
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
                    setOpen={setOpen}
                    setUpdated={setUpdated}
                  />
                )}
                {id === "54" && odds && (
                  <Aaa
                    setShowBetSection={setShowBetSection}
                    setBetState={setBetState}
                    odds={odds}
                    setOpen={setOpen}
                    setUpdated={setUpdated}
                  />
                )}
                {id === "55" && odds && (
                  <BTable
                    setShowBetSection={setShowBetSection}
                    setBetState={setBetState}
                    odds={odds}
                    setOpen={setOpen}
                    setUpdated={setUpdated}
                  />
                )}

                <div className="mt-2">
                  {/* <LastResult matchId={t1?.mid[1]} /> */}
                  <LastResult />
                  
                  {/* {id === "51" && <T20Rule />} */}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box sx={{
            marginTop:"-20px"
          }}>

            <Mybet />
          </Box>
        </Grid>
      </Grid>


      <div
        id="sidebar-right"
        className="col-md-3 sidebar-right desk-view-casino"
        style={{ position: "relative", top: 0, right: 0, width: "25.5%" }}
      >
        {/* <CasinoBetSlip
            setShowBetSection={setShowBetSection}
            showBetSection={showBetSection}
            betState={betState}
            stakes={stakes}
            open={open}
            setUpdated={setUpdated}
            updated={updated}
            setOpen={setOpen}
          /> */}
        {/* <div className="mt-2" style={{ marginRight: "5px" }}>
            <CasinoMatchBet />
          </div> */}
      </div>
      {/* <div className="mob-view-casino">
          <CasinoBetSlip
            setShowBetSection={setShowBetSection}
            showBetSection={showBetSection}
            betState={betState}
            stakes={stakes}
            open={open}
            setUpdated={setUpdated}
            updated={updated}
            setOpen={setOpen}
          />
        </div> */}
      {/* </div> */}
      <Modal
        open={openModals}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="casino_betmodals">
        <CasinoBetPlace handleClose={handleClose}/>
        </Box>
      </Modal>
    </>
  )
}

export default CasinoMainPage