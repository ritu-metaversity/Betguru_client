import { Box, styled } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import ApkContainer from "./ApkContainer";
import NavMenu from "./NavMenu";
import WalletSection from "./WalletSection";
import CopyrightContent from "./CopyrightContent";
import sideImg from "../../Img/side.png";


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
    background: 'linear-gradient(40deg, rgba(253, 18, 7, .6588235294117647), rgba(4, 0, 128, .7882352))',
    height: '100%',
  });
  
//   const CloseSidebarButton = styled('img')({
//     position: 'absolute',
//     right: '-15px',
//     top: '20px',
//     display: 'none',
//   });

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* <CloseSidebarButton src={CloseIcon} /> */}
      <BgImage>
        <SidebarHeader />
        <ApkContainer />
        <NavMenu />
        <WalletSection />
        <CopyrightContent />
      </BgImage>
    </SidebarContainer>
  )
}

export default Sidebar