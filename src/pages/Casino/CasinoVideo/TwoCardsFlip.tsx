import img1 from '../../../Img/1.png'

const TwoCardsFlip = () => {
  return (
    <div className="showcards-container n">
        <div className="showcards-wrapper ">
          <div className="top-left-team margin-minus ">
            <span
              style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}
              className="player"
            >
              Player A
            </span>
          </div>
          <div className="top-left margin-minus n">
            <img
              alt=""
              width={28}
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
            <img
              width={28}
              alt=""
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
            <img
              width={28}
              alt=""
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
          </div>
          <div className="top-left-team1 margin-minus n">
            <span
              style={{ fontWeight: 600, color: "#fff", fontSize: 15 }}
              className="player"
            >
              Player B
            </span>
          </div>
          <div className="top-left11 margin-minus n">
            <img
              alt=""
              width={28}
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
            <img
              alt=""
              width={28}
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
            <img
              alt=""
              width={28}
              className="img-fluid flipState"
              src={img1}
              style={{ transform: "rotateY(0deg)" }}
            />
          </div>
        </div>
      </div>
  )
}

export default TwoCardsFlip