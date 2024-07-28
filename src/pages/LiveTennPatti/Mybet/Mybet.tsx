import { Button } from "@mui/material"
import "./mybet.scss"
import { useNavigate } from "react-router-dom"
import { useGetCasinoMyBetMutation } from "../../../store/service/userServices/userServices";
import { useEffect } from "react";

const Mybet = () => {

    const nav = useNavigate();
    const [trigger, { data: betList }] = useGetCasinoMyBetMutation()

  useEffect(() => {
    trigger({ tableId: 2343, isGameCompleted: true })
  }, [])

    const handleCasinoBet = ()=>{
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
              <thead className="">
                <tr className="">
                  <th className="">Matched Bet</th>
                  <th className="">Market</th>
                  <th className="">Odds</th>
                  <th className="">Stake</th>
                </tr>
              </thead>
              <tbody className=" ng-star-inserted"></tbody>
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
