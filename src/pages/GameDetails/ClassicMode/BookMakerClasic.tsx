import type { FC } from "react"
import React from "react"
import type { oddsResponse } from "../../../store/service/odds/odds"

interface Props {
  handleOpen: any
  data: any
  keyData: string
}

const BookMakerClasic: FC<Props> = ({ handleOpen, data, keyData }) => {
  return (
    <>
      <div className="d-flex session_total">
        <div>
          {keyData}
          {/* <span style={{ color: "red" }}>minus</span> */}
        </div>
        <div style={{ color: "red" }}>0</div>
      </div>
      <div className="remove-margin-on-mobile" style={{ marginBottom: 40 }}>
        <table className="table" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              <th>Bookmaker</th>
              <th className="tc">lagai</th>
              <th className="tc">khai</th>
              <th className="tc">position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => {
              return (
                <tr className="ng-star-inserted">
                  <td>{item?.nation} </td>

                  <td
                    className="tc session_not book_yex"
                    onClick={() =>
                      handleOpen(
                        false,
                        true,
                        item?.b1,
                        keyData,
                        item?.sid,
                        item?.bs1,
                        item?.mid,
                        item?.nation,
                        "lagai",
                        new Date(),
                      )
                    }
                  >
                    {" "}
                    {item?.b1} <br />
                    <div className="session_not_sub">{item?.bs1}</div>
                  </td>

                  <td
                    className="tc session_yes book_yex"
                    onClick={() =>
                      handleOpen(
                        false,
                        false,
                        item?.l1,
                        keyData,
                        item?.sid,
                        item?.ls1,
                        item?.mid,
                        item?.nation,
                        "khai",
                        new Date(),
                      )
                    }
                  >
                    {" "}
                    {item?.l1} <br />{" "}
                    <div className="session_yes_sub">{item?.ls1}</div>
                  </td>

                  <td className="tc" style={{ color: "red" }}>
                    0
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

export default BookMakerClasic
