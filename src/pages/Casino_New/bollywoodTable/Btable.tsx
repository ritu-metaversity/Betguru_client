import {  useMemo } from "react"
import "../aaa/aaa.scss"
import clsx from "clsx"
import BtableMobile from "./BtableMobile"
import ToolTip from "../tooltip/Tooltip"
import TwoButtonContainer from "../TwoButtonContainer/TwoButtonContainer"
import BCardContainer from "./BCardContainer"
import { Grid } from "@mui/material"

const abc = ["a", "b", "c", "d", "e", "f"]
const BTable = ({
  odds,
  setBetState,
  setShowBetSection,
  setOpen,
  setUpdated,
}: any) => {
  const t2 = odds?.t2 || []
  const t2BySid = useMemo(() => {
    return t2.reduce((accu: any, curr: any) => {
      accu[curr.sid] = curr
      return accu
    })
  }, [odds])

  const handleClick = (odd: any, isBack: boolean) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: odd?.nation,
        casinoName: 2,
        isBack: isBack,
        odds: Number(odd?.rate) || Number(odd?.b1),
        selectionId: odd?.sid,
      }))
    setOpen(true)
    setUpdated(0)
    setShowBetSection(true)
  }

  return (
    <>
      <div className="content_container desk-view-casino">
        <div className="w-100">
          <ToolTip
            title={`Min: ${t2[0]?.min} Max: ${t2[0]?.max}`}
            placement={undefined}
          />
        </div>
        <Grid container spacing={2}>
          {t2.map((item: any, index: number) =>
            item.gtype === "btable" ? (
              <Grid item xs={4} className="col-4 text-center aaa-font">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span className="d-block">
                    <b>
                      <span className="text-danger text-capitalize">
                        {abc[index]}.
                      </span>
                      {item.nation}
                    </b>
                  </span>
                </div>
                <div
                  className={clsx({
                    "aaa-button": true,
                    clearfix: true,
                    suspended: item.gstatus !== "ACTIVE",
                  })}
                >
                  <button
                    onClick={() =>
                      handleClick({ ...item, rate: item?.b1 || "" }, true)
                    }
                    className="back"
                  >
                    <span className="odd">{item?.b1}</span>
                  </button>
                  <button
                    onClick={() =>
                      handleClick({ ...item, rate: item?.l1 || "" }, false)
                    }
                    className="lay"
                  >
                    <span className="odd">{item?.l1}</span>
                  </button>
                </div>
                <div className={item?.pnl>=0 ?"text-success":"text-danger"} style={{ textAlign: "center" }}>{item?.pnl}</div>
              </Grid>
            ) : (
              <></>
            ),
          )}
        </Grid>

        <div className="row "></div>
      </div>
      <div className="mob-view-casino mb-3">
        <BtableMobile t2={t2} handleClick={handleClick} t2BySid={t2BySid} />
      </div>
      <div
        className={`fancy_aaa_container ${window.innerWidth < 800 ? "mb-2" : null}`}
      >
        <div className="content_container desk_casino " style={{
          display:"flex",
          alignItems:"center"
        }}>
          <div className="w-100">
            <ToolTip
              title={`Min: ${t2BySid["7"]?.min} Max: ${t2BySid["7"]?.max}`}
              placement={undefined}
            />
          </div>
          <div className="row" style={{
            width:"100%"
          }}>
            <div className="col-12 text-center">
              <div style={{
                textAlign:"center"
              }}>
                <span className="d-block aaa-font">
                  <b>{t2BySid["7"]?.nation}</b>
                </span>
              </div>
              <div
                // className="aaa-button clearfix suspended"
                className={clsx({
                  "aaa-button": true,
                  clearfix: true,
                  suspended: t2BySid["7"]?.gstatus !== "ACTIVE",
                })}
              >
                <button
                  onClick={() =>
                    handleClick(
                      { ...t2BySid["7"], rate: t2BySid["7"]?.b1 || "" },
                      true,
                    )
                  }
                  className="back"
                >
                  <span className="odd">{t2BySid["7"]?.b1}</span>
                </button>
                <button
                  onClick={() =>
                    handleClick(
                      { ...t2BySid["7"], rate: t2BySid["7"]?.l1 || "" },
                      false,
                    )
                  }
                  className="lay"
                >
                  <span className="odd">{t2BySid["7"]?.l1}</span>
                </button>
              </div>
              <div className={t2BySid["7"]?.pnl>=0?"text-success":"text-danger"} style={{  textAlign:"center" }}>{t2BySid["7"]?.pnl}</div>
            </div>
          </div>
        </div>
        <div className="fancy_aaa_container" style={{ flex: 2 }}>
          <TwoButtonContainer
            setUpdated={setUpdated}
            setOpen={setOpen}
            toolTipshow={true}
            className={"d-flex"}
            setBetState={setBetState}
            setShowBetSection={setShowBetSection}
            t2={[t2BySid["14"], t2BySid["15"]]}
            noToolTip={undefined}
          />
        </div>
      </div>
      <div className="fancy_aaa_container d-flex-mob">
        <div className={window.innerWidth < 800 ? "mb-2" : undefined}>
          <TwoButtonContainer
            setUpdated={setUpdated}
            setOpen={setOpen}
            toolTipshow={true}
            className={"d-flex"}
            setBetState={setBetState}
            setShowBetSection={setShowBetSection}
            t2={[t2BySid["8"], t2BySid["9"]]}
            noToolTip={undefined}
          />
        </div>

        <BCardContainer
          setBetState={setBetState}
          setShowBetSection={setShowBetSection}
          setOpen={setOpen}
          setUpdated={setUpdated}
          t2={t2.filter((item: any) =>
            item?.nation?.toLowerCase()?.includes("card"),
          )}
        />
      </div>
    </>
  )
}

export default BTable
