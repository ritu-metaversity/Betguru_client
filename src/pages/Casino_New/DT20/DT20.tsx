import React, { useEffect, useState } from "react"
import "./DT20.scss"
import DT20SpecialButton from "./DT20SpecialButton"
import TwoButtonContainer from "../TwoButtonContainer/TwoButtonContainer"
import CardContainer from "../CardContainer/CardContainer"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

const DT20 = ({
  odds,
  setBetState,
  setShowBetSection,
  setOpen,
  setUpdated,
}: any) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { t2BySid } = odds

  const [draganRate, setDraganRate] = useState(0)
  const [tigerRate, setTigerRate] = useState(0)
  const [activeClass, setActiveClass] = useState(1)
  const [casinoShow, setCasinoShow] = useState(1)

  const handleCasino = (val: any) => {
    setCasinoShow(val)
    setActiveClass(val)
  }

  return (
    <>
      <DT20SpecialButton
        setBetState={setBetState}
        setShowBetSection={setShowBetSection}
        setOpen={setOpen}
        setUpdated={setUpdated}
        noToolTip={false}
        t2={[t2BySid["1"], t2BySid["3"], t2BySid["2"], t2BySid["4"]]}
      />

      <div className="dt20_container ">
        {/* <div className="mob-view-casino">
          <div>
            <ul className="nav nav-tabs main-gameHead1 game-nav-bar">
              <li
                className={`nav-item ${activeClass === 1 ? "activeClass" : ""}`}
                onClick={() => handleCasino(1)}
                style={{ flex: "unset" }}
              >
                <Link className="nav-link navlink1" to="#">
                  DRAGON
                </Link>
              </li>
              <li
                className={`nav-item ${activeClass === 2 ? "activeClass" : ""}`}
                style={{ flex: "unset" }}
              >
                <Link
                  to="#"
                  onClick={() => handleCasino(2)}
                  className="nav-link "
                >
                  TIGER
                </Link>
              </li>
            </ul>
          </div>
          {activeClass === 1 ? (
            <div>
              <div className="content_container text-center dt_back" >
                <TwoButtonContainer
                  toolTipshow={false}
                  setUpdated={setUpdated}
                  className={"d-flex"}
                  setBetState={setBetState}
                  setOpen={setOpen}
                  setShowBetSection={setShowBetSection}
                  t2={[t2BySid["5"], t2BySid["6"]]}
                  noToolTip
                ></TwoButtonContainer>
                <TwoButtonContainer
                  setUpdated={setUpdated}
                  toolTipshow={false}
                  className={"d-flex"}
                  setBetState={setBetState}
                  setOpen={setOpen}
                  setShowBetSection={setShowBetSection}
                  t2={[t2BySid["7"], t2BySid["8"]]}
                  noToolTip
                ></TwoButtonContainer>
              </div>
              <br />
              <CardContainer
                setUpdated={setUpdated}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                setOpen={setOpen}
                setTigerRate={setTigerRate}
                setDraganRate={setDraganRate}
                t2={[
                  t2BySid["9"],
                  t2BySid["10"],
                  t2BySid["11"],
                  t2BySid["12"],
                  t2BySid["13"],
                  t2BySid["14"],
                  t2BySid["15"],
                  t2BySid["16"],
                  t2BySid["17"],
                  t2BySid["18"],
                  t2BySid["19"],
                  t2BySid["20"],
                  t2BySid["21"],
                ]}
                noToolTip
              />
            </div>
          ) : (
            <div>
              <div className="content_container text-center ">
                <TwoButtonContainer
                  setUpdated={setUpdated}
                  toolTipshow={false}
                  setOpen={setOpen}
                  className={"d-flex"}
                  setBetState={setBetState}
                  setShowBetSection={setShowBetSection}
                  t2={[t2BySid["22"], t2BySid["23"]]}
                  noToolTip
                ></TwoButtonContainer>
                <TwoButtonContainer
                  setUpdated={setUpdated}
                  toolTipshow={false}
                  setOpen={setOpen}
                  className={"d-flex"}
                  setBetState={setBetState}
                  setShowBetSection={setShowBetSection}
                  t2={[t2BySid["24"], t2BySid["25"]]}
                  noToolTip
                ></TwoButtonContainer>
              </div>
              <br />
              <CardContainer
                setUpdated={setUpdated}
                setShowBetSection={setShowBetSection}
                setTigerRate={setTigerRate}
                setOpen={setOpen}
                setBetState={setBetState}
                setDraganRate={setDraganRate}
                t2={[
                  t2BySid["26"],
                  t2BySid["27"],
                  t2BySid["28"],
                  t2BySid["29"],
                  t2BySid["30"],
                  t2BySid["31"],
                  t2BySid["32"],
                  t2BySid["33"],
                  t2BySid["34"],
                  t2BySid["35"],
                  t2BySid["36"],
                  t2BySid["37"],
                  t2BySid["38"],
                ]}
                noToolTip
              />
            </div>
          )}
        </div> */}
        <Grid container spacing={2} className=" desk-view-casino ">
          <Grid item xs={12} md={6} className=" dt_back ">
            <div >
              <h4 className="dt_names" style={{ fontWeight: 600, }}>DRAGON</h4>
              <TwoButtonContainer
                setUpdated={setUpdated}
                toolTipshow={false}
                setOpen={setOpen}
                className={"d-flex"}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                t2={[t2BySid["5"], t2BySid["6"]]}
                noToolTip
              />
              <TwoButtonContainer
                setUpdated={setUpdated}
                toolTipshow={false}
                setOpen={setOpen}
                className={"d-flex"}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                t2={[t2BySid["7"], t2BySid["8"]]}
                noToolTip
              ></TwoButtonContainer>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className=" dt_back ">
            <div>
              <h4 className="dt_names" style={{ fontWeight: 600, }}>TIGER</h4>
              <TwoButtonContainer
                setUpdated={setUpdated}
                toolTipshow={false}
                setOpen={setOpen}
                className={"d-flex"}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                t2={[t2BySid["22"], t2BySid["23"]]}
                noToolTip
              ></TwoButtonContainer>
              <TwoButtonContainer
                setUpdated={setUpdated}
                toolTipshow={false}
                setOpen={setOpen}
                className={"d-flex"}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                t2={[t2BySid["24"], t2BySid["25"]]}
                noToolTip
              ></TwoButtonContainer>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <div className=" dt20_container ">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="content_container text-center">
              <h4 className="dt_names" style={{ fontWeight: 600 }}>DRAGON {draganRate}</h4>
              <CardContainer
                setUpdated={setUpdated}
                setOpen={setOpen}
                setBetState={setBetState}
                setShowBetSection={setShowBetSection}
                setTigerRate={setTigerRate}
                setDraganRate={setDraganRate}
                t2={[
                  t2BySid["9"],
                  t2BySid["10"],
                  t2BySid["11"],
                  t2BySid["12"],
                  t2BySid["13"],
                  t2BySid["14"],
                  t2BySid["15"],
                  t2BySid["16"],
                  t2BySid["17"],
                  t2BySid["18"],
                  t2BySid["19"],
                  t2BySid["20"],
                  t2BySid["21"],
                ]}
                noToolTip={false}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="content_container text-center">
              <h4 className="dt_names" style={{ fontWeight: 600 }}>TIGER {tigerRate}</h4>
              <CardContainer
                setUpdated={setUpdated}
                setOpen={setOpen}
                setShowBetSection={setShowBetSection}
                setTigerRate={setTigerRate}
                setBetState={setBetState}
                setDraganRate={setDraganRate}
                t2={[
                  t2BySid["26"],
                  t2BySid["27"],
                  t2BySid["28"],
                  t2BySid["29"],
                  t2BySid["30"],
                  t2BySid["31"],
                  t2BySid["32"],
                  t2BySid["33"],
                  t2BySid["34"],
                  t2BySid["35"],
                  t2BySid["36"],
                  t2BySid["37"],
                  t2BySid["38"],
                ]}
                noToolTip={false}
              />
            </div>
          </Grid>
        </Grid>
      </div> */}
    </>
  )
}

export default DT20
