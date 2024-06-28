import type { FC } from "react"
interface Props {
  handleOpen: any
  data: any
  keyData: string;
  oddsPnlData: {
    [x: number]: number;
}
}

const BookMakerClasic: FC<Props> = ({ handleOpen, data, keyData, oddsPnlData }) => {
  return (
    <>
      <div className="remove-margin-on-mobile" style={{ marginBottom: 40 }}>
        <table className="table" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              <th>Team ({data && data[0]?.maxBet})</th>
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
                    {item?.b1} 
                  
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
                    {item?.l1} 
                    
                  </td>

                  <td className="tc" style={{ color: oddsPnlData[parseInt(item?.sid)] > 0 ? "green" : "red" }}>
                  {oddsPnlData[parseInt(item?.sid)]}
                  </td>
                </tr>
              )
            }).reverse()}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BookMakerClasic
