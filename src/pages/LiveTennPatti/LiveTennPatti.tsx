import { Box, Grid } from "@mui/material"
import { useEffect, type FC } from "react"
import CasinoHeading from "../Casino/CasinoHeading/CasinoHeading"
import CasinoVideo from "../Casino/CasinoVideo/CasinoVideo"
import LiveTeenPattiTable from "./LiveTeenPattiTable"
import LastResult from "../Casino/CasinoVideo/LastResult"
import Mybet from "./Mybet/Mybet"

interface Props {
  type: number
}

const HeadingName: { [key: number]: { name: string; roundId: string } } = {
  1: {
    name: "20-20 LIVE TEENPATTI",
    roundId: "0",
  },
  2: {
    name: "LIVE ANDER BAHAR",
    roundId: "38.2421061",
  },
}

const LiveTennPatti: FC<Props> = ({ type }) => {
  



  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <CasinoHeading HeadingName={HeadingName[type]} />
          <CasinoVideo type={type} />

          <LiveTeenPattiTable type={type} />
          <LastResult />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ paddingTop: "0px !important", marginTop: "-5px" }}
        >
          <Mybet />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LiveTennPatti
