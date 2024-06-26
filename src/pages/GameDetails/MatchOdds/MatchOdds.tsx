import type { FC } from "react"
import type { Odd, Runner } from "../../../store/service/odds/odds"
interface Props {
  handleOpen: any
  data: Odd[] | undefined
}

const MatchOdds: FC<Props> = ({ handleOpen, data }) => {
  return (
    <>
      {data?.map(item => {
        return (
          <div className="mt-4">
            <table className="table second-table">
              <thead>
                <tr>
                  <th>TEAM: MAX {item?.maxBet}</th>
                  <th>LAGAI</th>
                  <th>KHAI</th>
                  <th>POSITION</th>
                </tr>
              </thead>
              <tbody>
                {item?.runners.map(res => {
                  return (
                    <tr className="gryBck">
                      <td className="cell-odds" style={{ width: "60%" }}>
                        {res?.name}
                      </td>
                      {res?.ex?.availableToBack?.map((items, id) => {
                        if(id !== 0) return null
                        return (
                          <td className="cell-blue" onClick={handleOpen}>
                           {items.price}
                          </td>
                        )
                      })}
                      {res?.ex?.availableToLay?.map((items, id) => {
                        if(id !== 0) return null
                        return (
                          <td className="cell-red" onClick={handleOpen}>
                           {items.price}
                          </td>
                        )
                      })}

                      <td className="text-center" style={{ fontWeight: 600 }}>
                        <span style={{ color: "red" }}>0</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </>
  )
}

export default MatchOdds
