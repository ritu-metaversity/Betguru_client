import rightArrow from "../../../Img/rightArrow.png"
import "./GameHeader.scss" 
import screenTop from '../../../Img/play-1-screen-top-bg.png'

const GameHeader = () => {
  return (
    <>
      <div className="header" style={{backgroundImage: `url(${screenTop})`}}>
        <div className="bg-image">
          <div className="match-title">
            <img src={rightArrow} alt="Right Arrow" className="pr-3" />
            <div className="matchHeader">
              SRI LANKA WOMEN V WEST INDIES WOMEN
            </div>
          </div>
          <div className="block-summary mob-none">
            <div className="ml-2 score-summary fnt-11 text-center pt-2 fnt-clr">
              <div className="scroll-container">
                <div className="scroll-text">Your scrolling text goes here</div>
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
