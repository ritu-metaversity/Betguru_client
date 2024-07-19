import { type FC, useEffect,type ChangeEvent, useState } from "react"
import tvIcon from "../../../Img/tv_icon.png"
import { listenToThemeChange } from "../../../utils/themeEvent";
import Marquee from "react-fast-marquee"


interface Props {
  isClassicMode: boolean
  setIsClassicMode: React.Dispatch<React.SetStateAction<boolean>>;
  id:string | undefined;
  claName:string,
  display?:string| undefined
}

const Scorecard: FC<Props> = ({ isClassicMode, setIsClassicMode, id, claName, display }) => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "purple-theme1");
  const [showTv, setShowTv] = useState(false)
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
  const handleShowTv = ()=>{
    setShowTv(!showTv)
  }
  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);
  return (
    <>
      <div className={`score ${claName}`}>
        <div className="toggles">
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleSwitch}
              checked={isClassicMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="Switch-to">Switch To {!isClassicMode?"Classic Mode":"New Mode"}</div>
        </div>
        <button className={`live-tv popupBtn ${themeColor}1`} onClick={handleShowTv}>
          <img src={tvIcon} className="livePlayBtn" alt="" />
          <span>View Tv</span>
        </button>
      </div>
      {
        isClassicMode && <Marquee className="color_change" >
        {display}
      </Marquee>
      }
      
      
      {
        showTv && <div className="tv-score-container">
        <iframe
          width="100%"
          className="tv-iframe live-iframe"
          title="score-iframe"
          src={`https://100tun.online/web/${id}.html`}
          
        />
      </div>
      }
        
      
      <div className={isClassicMode ? "p-t-10" : ""}>
        <iframe
          title="iframe"
          height={120}
          style={{ width: "100%" }}
          src={`https://score.247idhub.com/index.html/event/${id}?theme=dark-wolf`}
        />
      </div>
    </>
  )
}

export default Scorecard
