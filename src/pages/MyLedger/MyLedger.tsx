import { styled } from "@mui/material/styles"
import {
  Box,
  Typography,
  Container,
} from "@mui/material"
import WalletIcon from "@mui/icons-material/AccountBalanceWallet"
import { Link } from "react-router-dom"
import './Ledger.scss';
import walletImg from '../../Img/wallet 1.png'

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
            <img className="wallet-img"  src={walletImg} alt="wallet images" />
            <Typography component="p">0</Typography>
            </div>
            
          </WalletBox>
        </Header>
        <Box className="ledger_data">
          <div className="tableDiv" >
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
              <tbody></tbody>
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
    </LedgerContainer>
  )
}

export default MyLedger
