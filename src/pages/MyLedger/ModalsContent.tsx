import { useState, type FC } from "react"
import cros from "../../Img/cros.png"
import MatchBetLedger from "./MatchBetLedger"
import type { Data123 } from "../../store/service/userServices/user"
import SessionBetLedger from "./SessionBetLedger"

interface Props {
  handleClose: () => void
  data: Data123 | undefined
  sportName: string
}

const ModalsContent: FC<Props> = ({ handleClose, data,  sportName}) => {
  const [showMatchBet, setShowMatchBet] = useState(false)
  const [showSessionBet, setShowSessionBet] = useState(false)

  const handleMatchBet = () => {
    setShowMatchBet(true)
  }
  const handleSessionBet = () => {
    setShowSessionBet(true)
  }
  const handleBack = () => {
    setShowMatchBet(false)
    setShowSessionBet(false)
  }


  return (
    <div>
      <div className="main_popup">
        <h5 id="exampleModalLabel" className="popupTitle">
        {sportName}{" "}
        </h5>
        {!showMatchBet && !showSessionBet ? (
          <button
            type="button"
            aria-label="Close"
            className="close"
            onClick={handleClose}
          >
            <img src={cros} alt="cros" />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Close"
            className="close"
            onClick={handleBack}
          >
            <img src={cros} alt="cros" />
          </button>
        )}
      </div>
      <div className="modal-body">
        <div className="ng-star-inserted">
          <div className="popup-row">Date: {data?.date}</div>
          {showMatchBet && <MatchBetLedger ledgerData={data?.matchBets} />}
          {showSessionBet && (
            <SessionBetLedger ledgerData={data?.sessionBets} />
          )}
          <div
            className="popup-row"
            style={{ cursor: "pointer", color: "#2560ad" }}
            onClick={handleMatchBet}
          >
            Match Bets : {data?.matchBet}
          </div>
          <div className="popup-row" style={{ color: "green" }}>
            Match Won : {data?.matchWon}
          </div>
          <div
            className="popup-row"
            style={{ cursor: "pointer", color: "#2560ad" }}
            onClick={handleSessionBet}
          >
            Session Bets : {data?.sessionBet}
          </div>
          <div
            className="popup-row"
            style={{ color: data && data?.sessionWon > 0 ? "green" : "red" }}
          >
            Session Won : {data?.sessionWon}
          </div>
          <div className="popup-row">Won By : {data?.wonBy}</div>
          <div className="popup-row" style={{ color: "green" }}>
            WON Coins : {data?.totalWon}
          </div>
        </div>

        <div className="popup_Btn">
          <button
            type="button"
            className="popupBtn"
            onClick={handleClose}
            style={{ display: "block" }}
          >
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalsContent
