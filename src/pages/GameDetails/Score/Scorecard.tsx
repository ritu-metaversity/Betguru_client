import { type FC, useEffect,type ChangeEvent } from "react"
import tvIcon from "../../../Img/tv_icon.png"

interface Props {
  isClassicMode: boolean
  setIsClassicMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Scorecard: FC<Props> = ({ isClassicMode, setIsClassicMode }) => {
  useEffect(() => {
    const savedMode = localStorage.getItem("isClassicMode")
    if (savedMode !== null) {
      setIsClassicMode(JSON.parse(savedMode))
    }
  }, [])

  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const newMode = e.target.checked
    setIsClassicMode(newMode)
    localStorage.setItem("isClassicMode", JSON.stringify(newMode))
  }
  return (
    <>
      <div className="score">
        <div className="toggles">
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleSwitch}
              checked={isClassicMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="Switch-to">Switch To Classic Mode</div>
        </div>
        <button className="live-tv popupBtn">
          <img src={tvIcon} className="livePlayBtn" alt="" />
          <span>View Tv</span>
        </button>
      </div>
      <div className={isClassicMode ? "p-t-10" : ""}>
        <iframe
          title="iframe"
          height={120}
          style={{ width: "100%" }}
          src="https://zioplay.live/score/score.html?MatchID=33369838"
        />
      </div>
    </>
  )
}

export default Scorecard
