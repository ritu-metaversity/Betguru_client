import { Grid } from "@mui/material"
import "./Dashboard.scss"
import { useNavigate } from "react-router-dom"
import { useActiveMatchMutation } from "../../store/service/odds/oddsServices"
import { useEffect } from "react"
import crikball from '../../Img/red-ball.avif'
import liveImg from '../../Img/live.png'

const Dashboard = () => {
  const navigator = useNavigate()
  const [trigger, { data }] = useActiveMatchMutation()

  useEffect(() => {
    trigger()
  }, [])


  return (
    <div className="main_dash">
      <div className="p-10 bg-color">
        <div className="row m-0 header">
          <h1 className="col-9">DASHBOARD</h1>
        </div>
        <div>
          <div className="row m-0 game-container">
            {data?.data?.map(item => {
              const matchName = item?.matchName.split(' v ' || ' vs ');
              return (
                <div
                  className="aa-display"
                  onClick={() => navigator(`/inplay/${item?.matchId}`)}
                >
                  <div className="margin-left-div" style={{ marginLeft: 20 }}>
                    <div className="game-box">
                      <div className="game-time time-text">
                        {" "}
                        June 26, 2024 at 10:00 AM{" "}
                      </div>
                      {item?.inPlay && <img  src={liveImg} alt="" className="livePlayBtn1" />}
                      <div
                        className="game-detail"
                        style={{ height: 117, display: "inline-flex" }}
                      >
                        <div
                          style={{
                            width: 166,
                            textAlign: "center",
                            padding: "12px, 20px",
                          }}
                        >
                          <div style={{ height: 70 }}>
                            <img
                              className="team-new-logo"
                              src={crikball}
                              alt=""
                            />
                          </div>
                          <h3 className="team-name">{matchName[0].toUpperCase()}</h3>
                        </div>
                        <div className={`vertical i-0`}>
                          <div className="circle">
                            <p>vs</p>
                          </div>
                        </div>
                        <div
                          style={{
                            width: 166,
                            textAlign: "center",
                            padding: "12px, 20px",
                          }}
                        >
                          <div style={{ height: 70 }}>
                            <img
                              className="team-new-logo"
                              src={crikball}
                              alt=""
                            />
                          </div>
                          <h3 className="team-name">{matchName[1].toUpperCase()}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="game-footer">
                    <div className="stats-container">
                      <div className="stats">MATCH BETS</div>
                      <div className="stats-value">0</div>
                    </div>
                    <div className="stats-container">
                      <div className="stats">SESSION BETS</div>
                      <div className="stats-value">0</div>
                    </div>
                    <div className="stats-container">
                      <div className="stats">Match Type</div>
                      <div className="team-name">T-20</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
