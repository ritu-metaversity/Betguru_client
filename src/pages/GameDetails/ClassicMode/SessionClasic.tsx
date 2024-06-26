import type { FC } from "react"
import React from "react"
import type { oddsResponse } from "../../../store/service/odds/odds"

interface Props {
  handleOpen: any
  data: oddsResponse | undefined
  keyData: string
}

const SessionClasic: FC<Props> = ({ handleOpen, data, keyData }) => {
  return (
    <>
      <div className="d-flex session_total">
        <div>
          {keyData.includes("Fancy2") ? "session plus/" : keyData}
          <span style={{ color: "red" }}>minus</span>
        </div>
        <div style={{ color: "red" }}>0</div>
      </div>
      <div className="remove-margin-on-mobile" style={{ marginBottom: 40 }}>
        <table className="table for-height session_bets">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>session</th>
              <th style={{ width: "25%", textAlign: "center" }}>NOT</th>
              <th style={{ width: "25%", textAlign: "center" }}>YES</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(item => {
              return (
                <tr>
                  <td style={{ width: "50%" }}>
                    <p>
                      {" "}
                      {item?.nation} <br /> Max: {item?.maxBet}
                    </p>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  >
                    <div className="session_not">{item?.l1}</div>
                    <div className="session_not_sub">{item?.ls1}</div>
                  </td>
                  <td
                    style={{
                      width: "25%",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  >
                    <div className="session_yes">{item?.b1}</div>
                    <div className="session_yes_sub">{item?.bs1}</div>
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

export default SessionClasic
