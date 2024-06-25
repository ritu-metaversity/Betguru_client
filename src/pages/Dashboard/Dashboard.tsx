import { Grid } from "@mui/material"
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="main_dash">
      <div className="p-10 bg-color">
        <div className="row m-0 header">
          <h1 className="col-9">DASHBOARD</h1>
        </div>
        <div>
          <div className="row m-0 game-container">
            <div className="aa-display">
              <div className="margin-left-div" style={{ marginLeft: 20 }}>
                <div className="game-box">
                  <div className="game-time time-text">
                    {" "}
                    June 26, 2024 at 10:00 AM{" "}
                  </div>
                  <div
                    className="game-detail"
                    style={{ height: 117, display: "inline-flex" }}
                  >
                    <div
                      style={{
                        width: 166,
                        textAlign: "center",
                        padding: "12px",
                      }}
                    >
                      <div style={{ height: 70 }}>
                        <img
                          className="team-new-logo"
                          src="https://cricketvectors.akamaized.net/Teams/8Y.png?impolicy=default_web"
                          alt=""
                        />
                      </div>
                      <h3 className="team-name">WEST INDIES WOMEN</h3>
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
                        padding: "12px",
                      }}
                    >
                      <div style={{ height: 70 }}>
                        <img
                          className="team-new-logo"
                          src="https://cricketvectors.akamaized.net/Teams/1J.png?impolicy=default_web"
                          alt=""
                        />
                      </div>
                      <h3 className="team-name">SRI LANKA WOMEN</h3>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
