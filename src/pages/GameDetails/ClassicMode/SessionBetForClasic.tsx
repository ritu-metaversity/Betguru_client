import type { FC } from "react"
import type { Bet } from "../../../store/service/userServices/user"

interface Props {
  betList: Bet[] | undefined
  title: string
}

const SessionBetForClasic: FC<Props> = ({ betList, title }) => {
  return (
    <div className="m-n-10 remove-margin-on-mobile">
      <table className="table">
        <thead>
          <tr>
            <th>{title?.includes("Bookmaker") ? "Team" : "SESSION"}</th>
            <th className="tc">AMOUNT</th>
            <th className="tc">RATE</th>
            {!title?.includes("Bookmaker") && <th className="tc">RUN</th>}
            <th className="tc">MODE</th>
            {!title?.includes("Bookmaker") && <th className="tc">DEC</th>}
          </tr>
        </thead>
        <tbody>
          {betList?.map(item => {
            return (
              <tr>
                <td>{item?.nation}</td>
                <td className="tc">{item?.amount}</td>
                <td className="tc">{item?.rate}</td>
                {!item?.marketName?.includes("Bookmaker") && (
                  <td className="tc">{item?.priveValue}</td>
                )}

                <td className="tc">
                  {item?.marketName?.includes("Bookmaker")
                    ? item?.back
                      ? "lagai"
                      : "khai"
                    : !item?.marketName?.includes("Bookmaker")
                      ? item?.back
                        ? "Yes"
                        : "No"
                      : ""}
                </td>
                {!item?.marketName?.includes("Bookmaker") && (
                  <td className="tc">{item?.pnl}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SessionBetForClasic
