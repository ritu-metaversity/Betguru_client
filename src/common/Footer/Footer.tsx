import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  colors,
  styled,
} from "@mui/material";

// Importing images as modules
import CricketIcon from '../../Img/SquaresFour.png';
import CasinoIcon from '../../Img/c-chip.png';
import LedgerIcon from '../../Img/ledger.png';
import ProfileIcon from '../../Img/profile.png';
import LogoutIcon from '../../Img/SignOut.png';
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../store/service/userServices/userServices";
import snackbarUtil from "../../utils/Snackbar";
import { listenToThemeChange } from "../../utils/themeEvent";

const FooterContainer = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  bottom: 0,
  // backgroundImage: "linear-gradient(40deg, red, navy)",
  color: "#fff",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  zIndex: 99,
}));

const FooterItem = styled(BottomNavigationAction)(({ theme }) => ({
  textAlign: "center",
  opacity: 0.7,
  color:"#fff",
  whiteSpace: "nowrap !important",
  minWidth:"50px",
  fontSize:"12px !important",
  "&.Mui-selected": {
    opacity: 1,
    color:"#fff !important",
    fontSize:"12px !important"
  },
  '&.MuiBottomNavigationAction-label':{
    fontSize:"12px !important",
  }
}));

const Footer: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const navigator = useNavigate();
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "default-theme1");


  const [trigger, {data}] = useLogOutMutation()

  const handleLogout = ()=>{
    trigger();
  }

  useEffect(()=>{

    console.log(data, "data")

  }, [data])

  useEffect(()=>{
    if(data){
      if(!data?.status){
        snackbarUtil.success("Logout Successfull");
        localStorage.clear();
        navigator('/login')
      }else{
        snackbarUtil.error(data?.message)
      }
    }

  }, [data]);


  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);


  return (
    <FooterContainer
    className={`footer-div ${themeColor}`}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <FooterItem
        label="Cricket"
        onClick={()=>navigator('/cricket')}
        icon={<img src={CricketIcon} alt="Cricket" style={{ width: 24, height: 24 }} />}
      />
      <FooterItem
        label="Casino"
        onClick={()=>navigator('/casino')}
        icon={<img src={CasinoIcon} alt="Casino" style={{ width: 24, height: 24 }} />}
      />
      <FooterItem
        label="My Ledger"
        onClick={()=>navigator('/ledger')}
        icon={<img src={LedgerIcon} alt="Ledger" style={{ width: 24, height: 24 }} />}
      />
      <FooterItem
        label="My Profile"
        onClick={()=>navigator('/profile')}
        icon={<img src={ProfileIcon} alt="Profile" style={{ width: 24, height: 24 }} />}
      />
      <FooterItem
        label="Logout"
        onClick={handleLogout}
        icon={<img src={LogoutIcon} alt="Logout" style={{ width: 24, height: 24 }} />}
      />
    </FooterContainer>
  );
};

export default Footer;
