import { Button } from "@mui/material"
import "./mybet.scss"
import { useNavigate } from "react-router-dom"
import { useGetCasinoMyBetQuery } from "../../../store/service/userServices/userServices";
import { useEffect } from "react";

const Mybet = ({ tableId }: any) => {

  const nav = useNavigate();
  const { data: betList } = useGetCasinoMyBetQuery({ tableId: tableId, isGameCompleted: false, sportId: 5015 }, {pollingInterval:1500, refetchOnMountOrArgChange:true});




  const handleCasinoBet = () => {
    nav("/liveCasinoBet")
  }

  return (
    <div className="accordian-view ">
      <div className="card my-bet ">
        <div className="card-header ">
          <div className="w-100 ">
            <h5 className="m-0 ">MY BET</h5>
          </div>
        </div>
        <div className="card-body ">
          <div className="personal-info-content">
            <table className="w-100 ">
              <thead >
                <tr className="casino_bet_head">
                  <th  >Matched Bet</th>
                  <th >Market</th>
                  <th >Odds</th>
                  <th >Stake</th>
                </tr>
              </thead>
              <tbody className=" ng-star-inserted">
                {
                  betList?.data?.map((items) => (
                    <tr className={`casino_bet_list ${items?.back?"back":"lay"}`}>
                      <td>{items?.selectionName} ({items?.roundId})</td>
                      <td>{items?.gameName}</td>
                      <td>{items?.odds}</td>
                      <td>{items?.stake}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="justify-content-center " style={{ marginBottom: 10 }}>
        <Button className="comp_bet" onClick={handleCasinoBet}>See All Complete Bets</Button>

      </div>
    </div>
  )
}

export default Mybet
