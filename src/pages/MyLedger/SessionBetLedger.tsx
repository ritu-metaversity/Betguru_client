import type { FC } from "react"
import type { SessionBet12 } from "../../store/service/userServices/user"

interface Props {
  ledgerData: SessionBet12[] | undefined
}

const SessionBetLedger: FC<Props> = ({ ledgerData }) => {
  return (
    <div className="show-bets ng-star-inserted">
      <div className="col-12 mt-4 p-0 ng-star-inserted">
        <span className="title">SESSION BETS</span>
        {ledgerData?.map(items => {
          return (
            <div className="bid_section col-12 pd0 mt-2 ng-star-inserted">
              <div  className="headData"><div _ngcontent-vqn-c57="">{items?.selectionName}</div></div>
              <div className="col-12 row your_betSection justify-content-between">
                <div className="text-left-cls">
                  <div className="level">Amount</div>
                  <div className="value">{items?.amount}</div>
                </div>
               
                <div className="text-left-cls">
                  <div className="level">RATE</div>
                  <div className="value">{items?.rate}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Run</div>
                  <div className="value">{items?.run}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Mode</div>
                  <div className="value">{items?.mode}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Dec</div>
                  <div className="value">{items?.declared}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SessionBetLedger
