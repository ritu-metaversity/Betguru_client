import { styled } from "@mui/material/styles"
import { Box, Typography, Container, Modal } from "@mui/material"
import WalletIcon from "@mui/icons-material/AccountBalanceWallet"
import ArrowCircleDown from "../../Img/ArrowCircleDown.png"
import ArrowCircleUp from "../../Img/ArrowCircleUp.png"
import { Link } from "react-router-dom"
import "./Ledger.scss"
import walletImg from "../../Img/wallet 1.png"
import { useEffect, useState } from "react"
import ModalsContent from "./ModalsContent"
import {
  useGetLedgerBetDetailsMutation,
  useGetLedgerDetailsMutation,
} from "../../store/service/userServices/userServices"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
}

// Styled components
const LedgerContainer = styled(Box)({
  paddingTop: "30px",
  backgroundColor: "#f1f0f5",
})

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",
})

const WalletBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
})

const MyLedger = () => {
  const [open, setOpen] = useState(false)

  const [trigger, { data: ledgerData }] = useGetLedgerDetailsMutation()
  const [betTrigger, { data: ledgerBetData }] = useGetLedgerBetDetailsMutation()

  const handleOpen = (matchId: number | undefined) => {
    setOpen(true)
    betTrigger({
      matchId: matchId ?? 0,
    })
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
    trigger({})
  }, [])


  return (
    <LedgerContainer>
      <Container>
        <Header>
          <Typography
            variant="h3"
            className="mobileHide"
            sx={{ fontFamily: "Bebas Neue", fontWeight: 700, fontSize: "28px" }}
          >
            MY LEDGER
          </Typography>
          <WalletBox>
            <div className="wallet_ledger">
              <img className="wallet-img" src={walletImg} alt="wallet images" />
              <Typography component="p">0</Typography>
            </div>
          </WalletBox>
        </Header>
        <Box className="ledger_data">
          <div className="tableDiv">
            <table className="table table-striped mobs-view-hide">
              <thead>
                <tr style={{ background: "transparent" }}>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Remark</th>
                  <th scope="col">Won By</th>
                  <th scope="col">Won</th>
                  <th scope="col">Lost</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody className="ledger_body">
                {ledgerData?.data?.map(data => {
                  return (
                    <tr
                      className="ng-star-inserted"
                      onClick={() => handleOpen(data?.matchId)}
                    >
                      <td>
                        <img
                          className="position-image"
                          src={ArrowCircleUp}
                          alt=""
                        />
                        {data?.date}
                      </td>
                      <td>{data?.time}</td>
                      <td style={{ width: "200px" }}>{data?.remark}</td>
                      <td>{data?.wonBy}</td>
                      <td>{data?.won}</td>
                      <td>{data?.lost}</td>
                      <td>{data?.balance}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="pagination_ledger">
              <ul className="pagination">
                <li className="page-item disabled">
                  <Link
                    to="#"
                    className="page-link"
                    aria-label="First"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">««</span>
                  </Link>
                </li>

                <li className="page-item disabled">
                  <Link
                    to=""
                    className="page-link"
                    aria-label="Previous"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>

                <li className="page-item disabled">
                  <Link
                    to="#"
                    className="page-link"
                    aria-label="Next"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>

                <li className="page-item disabled">
                  <Link
                    to="#"
                    className="page-link"
                    aria-label="Last"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <span aria-hidden="true">»»</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="width_increse">
          <ModalsContent handleClose={handleClose} data={ledgerBetData?.data}/>
        </Box>
      </Modal>
    </LedgerContainer>
  )
}

export default MyLedger
