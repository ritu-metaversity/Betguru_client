// import React from "react";
import walletPng from "../../Img/wallet-for-mob.png";
import mobileView from "../../Img/mob-view-img.png";
import "./Mobile.scss";
import { useEffect, useState, type FC } from "react";
import { listenToThemeChange } from "../../utils/themeEvent";
import left from '../../Img/left.png'
import { useNavigate, useParams } from "react-router-dom";
interface Props {
  hederName: string;
  userBalance: { balance: number; } | undefined
}


const MobileHeader: FC<Props> = ({ hederName, userBalance }) => {
  const pathname = window.location.pathname.slice(1);
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "purple-theme1");

  const nav = useNavigate();

  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);

  const { id } = useParams();

  const handleBack = () => {
    nav("/cricket");
  }

  return (
    <div
      className="mob-bar-header"
      style={{ background: `url(${mobileView})` }}
    >
      <div className={`mob-bar-header-inn ${themeColor}`}>
        <div className="Binded-data">
          {
            id && pathname.includes(id) && <img onClick={handleBack} src={left} className="ng-star-inserted" alt="left-Icon" style={{
              marginRight: "10px",
              marginLeft: "6px"
            }} />
          }
          {
            pathname?.includes("casino") ? <h2 style={{
              textTransform: "capitalize"
            }}>Casino</h2> :

              <h2 style={{
                textTransform: "capitalize"
              }}>{pathname === "cricket" ? "Dashboard" : pathname.includes("inplay") ? hederName : pathname}</h2>}
        </div>
        <div className="img-text-right">
          <img src={walletPng} alt="Wallet" />
          <h6>
            {userBalance?.balance.toFixed(1)}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
