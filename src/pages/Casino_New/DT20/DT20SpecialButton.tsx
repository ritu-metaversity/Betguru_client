import { Grid } from "@mui/material"
import { SingleButton } from "../TwoButtonContainer/TwoButtonContainer"

const DT20SpecialButton = ({
  t2,
  noToolTip,
  setBetState,
  setOpen,
  setShowBetSection,
  setUpdated,
}:any) => {
  return (
    <div className="content_container">
      {!noToolTip && (
        <div className="w-100">
          {/* <ToolTip title={`Min:${t2[0].min} Max:${t2[0].max}`} /> */}
        </div>
      )}
      <Grid container spacing={2} className="gap-3 casino_row">
        <Grid item xs={9} className="dt_20">
          <Grid container spacing={2}>
            <Grid item xs={6} className=" casino_name_dt">
              <SingleButton
                setUpdated={setUpdated}
                setShowBetSection={setShowBetSection}
                setOpen={setOpen}
                setBetState={setBetState}
                odd={t2[0]}
              />
            </Grid>
            {/* <Grid item xs={2} className=" casino_name_dt_md">
              <SingleButton
                setUpdated={setUpdated}
                setShowBetSection={setShowBetSection}
                setOpen={setOpen}
                setBetState={setBetState}
                odd={t2[1]}
              />
            </Grid> */}
            <Grid item xs={6} className=" casino_name_dt">
              <SingleButton
                setUpdated={setUpdated}
                setShowBetSection={setShowBetSection}
                setOpen={setOpen}
                setBetState={setBetState}
                odd={t2[2]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <SingleButton
            setUpdated={setUpdated}
            setShowBetSection={setShowBetSection}
            setOpen={setOpen}
            setBetState={setBetState}
            odd={t2[3]}
          />
        </Grid>
      </Grid>

      {noToolTip && (
        <div
          className="w-100 text-end min-max-casino"
          style={{ marginTop: "6px" }}
        >
          <span className="fw">Min:</span> <span>{t2[0]?.min}</span>{" "}
          <span className="fw">Max:</span> <span>{t2[0]?.max}</span>
        </div>
      )}
    </div>
  )
}

export default DT20SpecialButton
