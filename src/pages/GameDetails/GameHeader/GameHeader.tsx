import rightArrow from "../../../Img/rightArrow.png"
import "./GameHeader.scss" 
import screenTop from '../../../Img/play-1-screen-top-bg.png'
import { useEffect, useState, type FC } from "react"
import type { Odd } from "../../../store/service/odds/odds"
import { listenToThemeChange } from "../../../utils/themeEvent"
import { useNavigate } from "react-router-dom"

interface Props{
  data: Odd[] | undefined,
  display:string | undefined
}

const GameHeader:FC<Props> = ({data, display}) => {
  const nav = useNavigate();
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "purple-theme");

  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);
  return (
    <>
      <div className="header" style={{backgroundImage: `url(${screenTop})`}}>
        <div className={`${themeColor} bg-image`}>
          <div className="match-title">
            <img src={rightArrow} alt="Right Arrow" className="pr-3" onClick={()=>nav('/cricket')}/>
            <div className="matchHeader">
              {data && data[0]?.matchName}
            </div>
          </div>
          <div className="block-summary mob-none">
            <div className="ml-2 score-summary fnt-11 text-center pt-2 fnt-clr">
              <div className="scroll-container">
                <div className="scroll-text">{display}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mob-block">
        <div className="block-summary">
          <div className="ml-2 fnt-11 text-center pt-2 fnt-clr">
          <div className="scroll-text">Your scrolling text goes here</div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default GameHeader
