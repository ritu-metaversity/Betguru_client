import React from 'react'
import img from '../../../Img/8CC.png'

const OneCardsFlip = () => {
  return (
    <div  className="showcards-container">
    <div  className="showcards-wrapper">
      <div  className="top-left-team margin-minus">
        <span
          
          style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}
        >
          A
        </span>
      </div>
      <div  className="top-left111">
        <img
          alt=''
          width={28}
          className="img-fluid mr-2"
          src={img}
        />
      </div>
      <div  className="top-left11Ander margin-minus">
        
      </div>
      <div  className="top-left11Bahar margin-minus">
        
      </div>
      <div  className="top-left-team1 margin-minus">
        <span style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}
        >
          B
        </span>
      </div>
    </div>
  </div>
  
  )
}

export default OneCardsFlip