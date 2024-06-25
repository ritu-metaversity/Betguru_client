import t20 from '../../Img/t20.jpg'
import ab from '../../Img/ab.png'

const Casino = () => {
  return (
    <div className="main_dash">
      <div className="p-10 bg-color" style={{ padding: 30 }}>
        <div className="row m-0 header">
          <h1 className="col-9">CASINO</h1>
        </div>
        <div>
            <div className="row_casino">
              <div className="game-container">
                <div  style={{ padding: "0 10px" }}>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={t20}
                      className="misc-games"
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className=" game-container">
                <div  style={{ padding: "0 10px" }}>
                  <div style={{ cursor: "pointer" }}>
                    <img
                      src={ab}
                      className="misc-games"
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Casino
