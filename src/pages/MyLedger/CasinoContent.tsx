import type { FC } from "react"
import React, { useState } from "react"
import type { DataBetLedger } from "../../store/service/userServices/user"
import CasinoBetLedger from "./CasinoBetLedger"
import moment from "moment"
import cros from "../../Img/cros.png"


interface Props {
    casinoData: DataBetLedger,
    handleClose: () => void,
    casinoDate: string
}

const CasinoContent: FC<Props> = ({ casinoData, handleClose, casinoDate }) => {
    const [showMatchBet, setShowMatchBet] = useState(false);
    // const [casinoName, setCasinoName] = useState("");
    const [casinoBetData, setCasinoBetData] = useState([])

    const handleMatchBet = (name: string) => {
        setShowMatchBet(true);
        let casinoBetList = casinoData?.dataAndBets?.reduce((acc, item) => {
            if (item?.name === name) {
                acc[item?.name] = item?.betList;
            }
            return acc;
        }, {});
        setCasinoBetData(casinoBetList[name])
    }

    const handleBack = () => {
        setShowMatchBet(false)
    }


    return (
        <div>
            <div className="main_popup">
                <h5 id="exampleModalLabel" className="popupTitle">
                    {`Casino Bets Records ${moment(casinoDate, "DD.MM.YYYY").format("YYYY-MM-DD")}`}

                    {/* ${moment(casinoData?.date, "YYYY/MM/DD at HH:mm:ss").format("YYYY-MM-01")} */}
                </h5>
                {!showMatchBet ? (
                    <button
                        type="button"
                        aria-label="Close"
                        className="close"
                        onClick={handleClose}
                        style={{
                            cursor:"pointer"
                        }}
                    >
                        <img src={cros} alt="cros" />
                    </button>
                ) : (
                    <button
                        type="button"
                        aria-label="Close"
                        className="close"
                        onClick={handleBack}
                        style={{
                            cursor:"pointer"
                        }}
                    >
                        <img src={cros} alt="cros" />
                    </button>
                )}
            </div>
            <div className="modal-body">
                <div className="ng-star-inserted">
                    {showMatchBet && <CasinoBetLedger ledgerData={casinoBetData} />}
                    {casinoData?.dataAndBets?.map(items => {
                        return (
                            <div
                                className="popup-row"
                                style={{ cursor: "pointer", color: "#2560ad" }}
                                onClick={() => handleMatchBet(items?.name)}
                            >
                                {items?.name}{" "}
                                <span style={{ color: items?.pnl > 0 ? "green" : "red" }}>{items?.pnl > 0 ? "WON coins" : "LOST coins"}</span>
                                <span style={{ color: items?.pnl > 0 ? "green" : "red" }}>: {items?.pnl}</span>
                            </div>
                        )
                    })}
                    <div className="popup-row" style={{ color: casinoData?.totalWon >= 0 ? "green" : "red" }}>
                        WON Coins : {casinoData?.totalWon}
                    </div>
                </div>

                <div className="popup_Btn">
                    <button
                        type="button"
                        className="popupBtn"
                        onClick={handleClose}
                        style={{ display: "block" }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CasinoContent
