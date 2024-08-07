import type { FC } from "react"
import type { MatchBet12 } from "../../store/service/userServices/user"

interface Props {
  ledgerData: MatchBet12[] | undefined
}

const MatchBetLedger: FC<Props> = ({ ledgerData }) => {
  return (
    <div className="show-bets ng-star-inserted">
      <div className="col-12 mt-4 p-0 ng-star-inserted">
        <span className="title">MATCH BETS</span>
        {ledgerData?.map(items => {
          return (
            <div className="bid_section ">
              <div className="your_betSection deskonly">
                <div className="text-left-cls">
                  <div className="level">Team</div>
                  <div className="value">{items?.selectionName}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Amount</div>
                  <div className="value">{items?.amount}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">RATE</div>
                  <div className="value">{items?.rate}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Mode</div>
                  <div className="value">{items?.mode}</div>
                </div>
              </div>
              <div className="mob_only">
                <div className="text-left-cls text_up">
                  <div className="level">Team</div>
                  <div className="value">{items?.selectionName}</div>
                </div>
              <div className="your_betSection">
                <div className="text-left-cls">
                  <div className="level">Amount</div>
                  <div className="value">{items?.amount}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">RATE</div>
                  <div className="value">{items?.rate}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Mode</div>
                  <div className="value">{items?.mode}</div>
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

export default MatchBetLedger
