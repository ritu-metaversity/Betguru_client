import type { FC } from "react"

interface Props {
  ledgerData: any
}

const CasinoBetLedger: FC<Props> = ({ ledgerData }) => {
    console.log(ledgerData, "ledgerDataledgerDataledgerData")
  return (
    <div className="show-bets show-bets-casino">
      <div className="col-12 mt-4 p-0 ng-star-inserted">
        <span className="title">BETS</span>
        {ledgerData?.map(items => {
          return (
            <div className="bid_section casino_bid">
              <div className="your_betSection ">
                <div className="text-left-cls">
                  <div className="level">RoundId</div>
                  <div className="value">{items?.marketId}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Amount</div>
                  <div className="value">{items?.amount}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">RATE</div>
                  <div className="value">{Number(parseFloat(items.rate).toFixed(2))}</div>
                </div>
                <div className="text-left-cls">
                  <div className="level">Player</div>
                  <div className="value">{items?.selectionName}</div>
                </div>
                <div className="text-left-cls ">
                  <div className="level">Win</div>
                  <div className="value">{items?.winner}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CasinoBetLedger
