import type { FC } from "react"
import React from "react"
import type { oddsResponse } from "../../../store/service/odds/odds"
interface Props {
  handleOpen: any
  data: oddsResponse | undefined
  keyData: string
}

const Session: FC<Props> = ({ handleOpen, data, keyData }) => {
  return (
    <>
      <div className="mt-2">
        <div className="section_plus">
          <div>
            {keyData?.includes("Fancy2") ? "Session Plus/Minus" : keyData}
          </div>
          <div style={{ fontWeight: 600 }}>0</div>
        </div>
      </div>
      <div className="mt-4">
        <table className="table third-table">
          <thead>
            <tr>
              <th>SESSION</th>
              <th>NO</th>
              <th>YES</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(item => {
              return (
                <tr
                  className="gryBck"
                  style={{
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <td className="cell-odds" style={{ width: "70%" }}>
                    <p style={{ marginTop: 15 }}>
                      {" "}
                      {item?.nation} <br /> Max: {item?.maxBet}
                    </p>
                  </td>
                  <td className="cell-red" onClick={handleOpen}>
                    <div className="sm-text">{item?.l1}</div>
                    <div className="xs-text">{item?.ls1}</div>
                  </td>
                  <td className="cell-blue" onClick={handleOpen}>
                    <div className="sm-text">{item?.b1}</div>
                    <div className="xs-text">{item?.bs1}</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Session
