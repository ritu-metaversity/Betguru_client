
import type { FC } from 'react'
import './style.scss'
import TwoCardsFlip from "./TwoCardsFlip"
import OneCardsFlip from './OneCardsFlip'


interface Props {
  type: number
}


const CasinoVideo:FC<Props> = ({type}) => {
  return (
    <div className="score-panel n">
      {
        type === 1?<TwoCardsFlip />:<OneCardsFlip />
      }
      
      <div className="casino-counter n"> 1 </div>
      <iframe
        title="video"
        width="100%"
        height={210}
        src={type === 1?"https://vrnl.xyz/?params=8015,TP2020":"https://skt1.casinovid.in/supervid/teen20.php?id=3053"}
        style={{
          border: 1,
        //   marginLeft: "-1px",
        //   marginRight: "-1px",
          marginTop: 0,
          marginBottom: "-5px",
        }}
        className="n"
      />
    </div>
  )
}

export default CasinoVideo