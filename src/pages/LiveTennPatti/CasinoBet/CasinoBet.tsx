/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "@mui/material/styles"
import { Box, Grid, Typography } from "@mui/material"
// import ArrowCircleDown from "../../Img/ArrowCircleDown.png";
// import ArrowCircleUp from "../../Img/ArrowCircleUp.png";
import "../../MyLedger/Ledger.scss"

import moment from "moment"
import { useCasinoListQuery, useGetCasinoMyBetMutation } from "../../../store/service/userServices/userServices"
import { useEffect, useState } from "react"



const LedgerContainer = styled(Box)({
  paddingTop: "30px",
  backgroundColor: "#f1f0f5",
})

const CasinoBet = () => {
  const currentItems: any[] = []
  const [casinoId, setCasinoId] = useState<string>("")

  const handleDelectValue = (e:any)=>{
    setCasinoId(e.target.value);
  }

  const { data } = useCasinoListQuery();



  const [getCasuno,{data:CasinoBet }] = useGetCasinoMyBetMutation();

  useEffect(()=>{
    getCasuno({
      tableId:casinoId,
      isGameCompleted:true
    })
  }, [casinoId])


  return (
    <LedgerContainer>
      <Box>
        {/* <Header
          sx={{
            pl: 4,
            pr: 4,
          }}
        > */}
        <Grid container spacing={2} sx={{
            pl: 4,
            pr: 4,
          }}>
          <Grid item md={8}>
            <Typography
              variant="h3"
              className="mobileHide"
              sx={{
                fontFamily: "Bebas Neue",
                fontWeight: 700,
                fontSize: "28px",
              }}
            >
              Casino Bet
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} className="Mob_pad">
            <Box>
              <select 
                className="form-control casino_selected"
                onChange={handleDelectValue}
              >
                <option  value="ALL" selected>
                  All Games
                </option>
                {
                  data?.data?.map((items)=>{
                    return(
                      <option  value={items?.tableId}>
                      {items?.name}
                    </option>
                    )
                  })
                }
              </select>
            </Box>
          </Grid>
          </Grid>
        <Box className="ledger_data">
          <div className="tableDiv">
            <table className="table table-striped mobs-view-hide">
              <thead>
                <tr style={{ background: "transparent" }}>
                  <th scope="col">Id</th>
                  <th scope="col">Game</th>
                  <th scope="col">RoundID</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Bet</th>
                  <th scope="col">Result</th>
                  <th scope="col">Prof/Loss</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody className="ledger_body">
                {CasinoBet && CasinoBet?.data?.map((data, index) => (
                  <tr key={index} className="ng-star-inserted">
                    <td>{index +1}</td>
                    <td>{data?.gameName}</td>
                    <td>{data?.roundId}</td>
                    <td>{data?.stake}</td>
                    <td>{data?.odds}</td>
                    <td>{data?.selectionName}</td>
                    <td>{data?.result}</td>
                    <td className={data?.pnl>0?"text_green":"text_red"}>{data?.pnl}</td>
                    <td>{moment(data?.date, "HH:mm:ss").format("hh:mm A")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </LedgerContainer>
  )
}

export default CasinoBet
