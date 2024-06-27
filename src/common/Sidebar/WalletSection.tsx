import { Box, Typography, colors } from "@mui/material"
import { styled } from "@mui/system"
import WalletIcon from "../../Img/wallet 1.png"
import { UserBalance } from "../../store/service/userServices/user"

const WalletContainer = styled(Box)({
  bottom: "35px",
  position: "absolute",
  background: "hsla(0, 0%, 100%, 0.1)",
  border: "1.5px solid hsla(0, 0%, 100%, 0.2)",
  boxSizing: "border-box",
  backdropFilter: "blur(10px)",
  borderRadius: "12px",
  width: "272px",
  height: "52px",
  marginLeft: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
})

const WalletText = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Lato !important",
    fontWeight: 500,
    fontSize: "12px !important",
    lineHeight: "14px",
    color: "#FFF !important",
    textAlign: "left",
  },
})

const CoinsText = styled(Typography)({
  color: "#fff",
  alignItems: "center",
  "&.MuiTypography-root": {
    fontFamily: "Roboto !important",
    fontSize: "19px",
    fontWeight: 700,
    lineHeight: "28px",
  },
})
const Coins = styled(Typography)({
  color: "#fff",
  "&.MuiTypography-root": {
    fontFamily: "Lato !important",
    fontWeight: 500,
    fontSize: "12px !important",
    lineHeight: "14px",
    color: "#FFF !important",
    textAlign: "left",
    opacity: .6,
  },
})

interface Props{
  userBalance:{ balance: number; } | undefined;
}
const WalletSection: React.FC<Props> = ({userBalance}) => {
  return (
    <WalletContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img src={WalletIcon} alt="Wallet" className="wallet-img" />
        <WalletText>My Wallet:</WalletText>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CoinsText>{userBalance?.balance}</CoinsText>
        <Coins className="txt ml-2">Coins</Coins>
      </Box>
    </WalletContainer>
  )
}

export default WalletSection
