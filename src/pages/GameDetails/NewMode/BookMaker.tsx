import type { FC } from "react"
import React from "react"
interface Props {
  handleOpen: any
  data: any
  keyData: string
}

const BookMaker: FC<Props> = ({ handleOpen, data, keyData }) => {
  return (
    <>
      <div className="mt-2">
        <div className="section_plus">
          <div>
            {keyData}
          </div>
          <div style={{ fontWeight: 600 }}>0</div>
        </div>
      </div>
      <div className="mt-4">
        <table className="table third-table">
          <thead>
            <tr>
              <th>BOOKMAKER</th>
              <th>LAGAI</th>
              <th>KHAI</th>
              <th>POSITION</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any) => {
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
                  
                  <td
                    className="cell-blue"
                    onClick={() =>
                      handleOpen(
                        true,
                        true,
                        item?.b1,
                        keyData,
                        item?.sid,
                        item?.bs1,
                        item?.mid,
                        item?.nation,
                        "LAGAI",
                        new Date(),
                      )
                    }
                  >
                    <div className="sm-text">{item?.b1}</div>
                    <div className="xs-text">{item?.bs1}</div>
                  </td>
                  <td
                    className="cell-red"
                    onClick={() =>
                      handleOpen(
                        true,
                        false,
                        item?.l1,
                        keyData,
                        item?.sid,
                        item?.ls1,
                        item?.mid,
                        item?.nation,
                        "KHAI",
                        new Date(),
                      )
                    }
                  >
                    <div className="sm-text">{item?.l1}</div>
                    <div className="xs-text">{item?.ls1}</div>
                  </td>
                  <td className="text-center" style={{ fontWeight: 600 }}>
                    <span style={{ color: "red" }}>0</span>
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

export default BookMaker
