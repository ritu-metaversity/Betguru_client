import type { FC } from "react"
import React from "react"
interface Props {
  handleOpen: any
  data: any
  keyData: string;
  oddsPnlData: {
    [x: number]: number;
}
}

const BookMaker: FC<Props> = ({ handleOpen, data, keyData, oddsPnlData }) => {
  return (
    <>
      <div className="mt-4">
        <table className="table second-table">
          <thead>
            <tr>
              <th>TEAM: MAX {data && data[0]?.maxBet}</th>
              <th>LAGAI</th>
              <th>KHAI</th>
              <th>POSITION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => {
              return (
                <tr className="gryBck">
                  <td className="cell-odds" style={{ width: "60%" }}>
                    {item?.nation}
                  </td>

                  <td
                    className="cell-blue"
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
                        "LAGAI",
                        new Date(),
                      )
                    }
                  >
                    {item.b1}
                  </td>

                  <td
                    className="cell-red"
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
                        "KHAI",
                        new Date(),
                      )
                    }
                  >
                    {item.l1}
                  </td>

                  <td className="text-center" style={{ fontWeight: 600 }}>
                    <span style={{ color: oddsPnlData[parseInt(item?.sid)] > 0 ? "green" : "red" }}>{oddsPnlData[parseInt(item?.sid)] || 0}</span>
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
