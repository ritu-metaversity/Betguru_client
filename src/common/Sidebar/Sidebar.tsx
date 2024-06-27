import { Box, styled } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import ApkContainer from "./ApkContainer";
import NavMenu from "./NavMenu";
import WalletSection from "./WalletSection";
import CopyrightContent from "./CopyrightContent";
import sideImg from "../../Img/side.png";
import { useEffect, useState } from "react";
import { listenToThemeChange } from "../../utils/themeEvent";
import { UserBalance } from "../../store/service/userServices/user";


const SidebarContainer = styled(Box)({
    position: 'absolute',
    width: '320px',
    height: '100vh',
    left: 0,
    top: 0,
    background: `url(${sideImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    transition: '.5s !important',
  });
  
  const BgImage = styled(Box)({
    
    height: '100%',
  });
  
  interface Props{
    userBalance:{ balance: number; } | undefined;
  }

const Sidebar = ({userBalance}:Props) => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "default-theme");

  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);


  return (
    <SidebarContainer>
      {/* <CloseSidebarButton src={CloseIcon} /> */}
      <BgImage className={themeColor}>
        <SidebarHeader />
        <ApkContainer />
        <NavMenu />
        <WalletSection userBalance={userBalance}/>
        <CopyrightContent />
      </BgImage>
    </SidebarContainer>
  )
}

export default Sidebar