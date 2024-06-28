import { useEffect } from "react"
import { Typography } from "@mui/material"
import { styled } from "@mui/system"
import { keyframes } from "@emotion/react"
import { useUserMessageMutation } from "../../store/service/userServices/userServices"
import Marquee from "react-fast-marquee"

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`

const MarqueeContainer = styled("div")({
  background: "#090909",
  padding: "8px 16px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  color: "#fff",
})

const MarqueeContent = styled(Typography)({
  display: "inline-block",
  fontSize: "1rem",
  // animation: `${marquee} 15s linear infinite`,
  // "&:hover": {
  //   animationPlayState: "paused",
  // },
})

const Header = () => {
  const [trigger, { data }] = useUserMessageMutation()
  const token = localStorage.getItem("client-token")

  useEffect(() => {
    if (token) {
      trigger()
    }
  }, [token])

  return (
    <MarqueeContainer>
      <Marquee autoFill={false} pauseOnHover={true} >
        <h6 className="mar_head">
        {data?.data}
        </h6>
        </Marquee>
    </MarqueeContainer>
  )
}

export default Header
