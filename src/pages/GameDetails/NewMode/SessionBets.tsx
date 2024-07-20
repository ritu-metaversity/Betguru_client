import type { FC } from "react"
import "./session.scss"
import type { Bet } from "../../../store/service/userServices/user"

interface Props {
  betList: Bet[] | undefined
  title: string
}

const SessionBets: FC<Props> = ({ betList, title }) => {
  return (
    <div className="side-section" style={{ padding: "13px 26px 0rem" }}>
      <div className="col-12 mt-4 p-0">
        <span className="title" style={{ color: "black" }}>
          {title?.includes("Bookmaker") ? "MATCH BETS" : "SESSION BETS"}
        </span>
        {betList?.map(item => {
          return (
            <div className="bid_section col-12 pd0 mt-2">
              {!title?.includes("Bookmaker") && (
                <div className="head" style={{ color: "black" }}>
                  <div>{item?.nation}</div>
                </div>
              )}

              <div className="row your_betSection justify-content-between">
                {title?.includes("Bookmaker") && <div className="text-left-cls">
                  <div className="level">TEAM</div>
                  <div className="value" style={{ color: "black" }}>
                    {item?.nation}
                  </div>
                </div>}
                <div className="text-left-cls">
                  <div className="level">Amount</div>
                  <div className="value" style={{ color: "black" }}>
                    {item?.amount}
                  </div>
                </div>
                <div className="text-left-cls">
                  <div className="level">RATE</div>
                  <div className="value" style={{ color: "black" }}>
                    {item?.rate}
                  </div>
                </div>
                {
                  !title?.includes("Bookmaker") && <div className="text-left-cls">
                  <div className="level">RUN</div>
                  <div className="value" style={{ color: "black" }}>
                    {item?.priveValue}
                  </div>
                </div>
                }
                
                <div className="text-left-cls">
                  <div className="level">MODE</div>
                  <div className="value" style={{ color: "black" }}>
                    {item?.marketName?.includes("Bookmaker")?item?.back ? "L":"K":!item?.marketName?.includes("Bookmaker")?item?.back ? "Y":"N":""}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SessionBets
