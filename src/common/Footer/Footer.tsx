import React, { useEffect, useState } from "react"
import "./Footer.scss"

import CricketIcon from "../../Img/SquaresFour.png"
import CasinoIcon from "../../Img/c-chip.png"
import LedgerIcon from "../../Img/ledger.png"
import ProfileIcon from "../../Img/profile.png"
import LogoutIcon from "../../Img/SignOut.png"
import { useNavigate } from "react-router-dom"
import { useLogOutMutation } from "../../store/service/userServices/userServices"
import snackbarUtil from "../../utils/Snackbar"
import { listenToThemeChange } from "../../utils/themeEvent"

const FooterData = [
  {
    imgName: CricketIcon,
    name: "Cricket",
    link: "/cricket",
  },
  {
    imgName: CasinoIcon,
    name: "Casino",
    link: "/casino",
  },
  {
    imgName: LedgerIcon,
    name: "My Ledger",
    link: "/ledger",
  },
  {
    imgName: ProfileIcon,
    name: "My Profile",
    link: "/profile",
  },
  {
    imgName: LogoutIcon,
    name: "Logout",
    link: "/login",
  },
]

const Footer: React.FC = () => {
  const [value, setValue] = React.useState<number>(0)
  const navigator = useNavigate()
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("app-theme") || "default-theme1",
  )

  const [trigger, { data }] = useLogOutMutation()

  useEffect(() => {
    listenToThemeChange(setThemeColor)
  }, [])


  const handleNavClick = (link:string, id:number)=>{
    setValue(id);
    
    if(link === "/login"){
      trigger();
      navigator(link);
      snackbarUtil.success("Logout Successfull");
      localStorage.clear();
    }else{
      navigator(link);
    }
  }

  return (
    <>
      <div className={`footer-div ${themeColor}`}>
        {FooterData.map((item, id) => {
          return (
            <div className={`footer-items ${value === id?"active":""}`} onClick={()=>handleNavClick(item?.link, id)}>
              <div>
                <img src={item?.imgName} alt="" />
              </div>
              <div className="footer_title">{item?.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Footer
