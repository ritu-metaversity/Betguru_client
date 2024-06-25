// import React from "react";
import walletPng from "../../Img/wallet-for-mob.png";
import mobileView from "../../Img/mob-view-img.png";
import "./Mobile.scss";

const MobileHeader: React.FC = () => {
  return (
    <div
      className="mob-bar-header"
      style={{ background: `url(${mobileView})` }}
    >
      <div className="mob-bar-header-inn">
        <div className="Binded-data">
          <h2>Profile</h2>
        </div>
        <div className="img-text-right">
          <img src={walletPng} alt="Wallet" />
          <h6>0</h6>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
