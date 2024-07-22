import type { FC } from "react"
import React from "react"
interface Props {
  handleOpen: any
  data: any
  keyData: string
  sessionBetPnl:number | undefined
  handleOpenFancyBook:any
}

const Session: FC<Props> = ({ handleOpen, data, keyData, sessionBetPnl, handleOpenFancyBook }) => {
  return (
    <>
      <div className="mt-2">
        <div className="section_plus">
          <div>
            {keyData?.includes("Fancy2") ? "Session Plus/Minus" : keyData}
          </div>
          <div style={{ fontWeight: 600 }}>{sessionBetPnl || 0}</div>
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
            {data?.map((item:any) => {
              return (
                <tr
                  className="gryBck"
                  style={{
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <td className="cell-odds" style={{ width: "70%" }}>
                    <p style={{ marginTop: 15, cursor:"pointer" }} onClick={()=>handleOpenFancyBook(item?.sid)}>
                      {" "}
                      {item?.nation} <br /> Max: {item?.maxBet}
                    </p>
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
                        "No",
                        new Date()
                      )
                    }
                  >
                    <div className="sm-text">{item?.l1}</div>
                    <div className="xs-text">{item?.ls1}</div>
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
                        "Yes",
                        new Date()
                      )
                    }
                  >
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
