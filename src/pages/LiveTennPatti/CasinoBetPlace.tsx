import { useEffect, type FC } from "react"
import "./placebet.scss"
import { useGetCasinoBetPlacedMutation } from "../../store/service/userServices/userServices"
import snackbarUtil from "../../utils/Snackbar"

interface Props {
  handleClose: () => void
  betState: {
    nation: string
    casinoName: number
    isBack: boolean
    odds: any
    marketId: string
    placeTime: string
    selectionId: any
    colorName: string
    stake: number
    matchId: string,
    diviceInfo:any
  }
  setBetState: React.Dispatch<
    React.SetStateAction<{
      nation: string
      casinoName: number
      isBack: boolean
      odds: any
      marketId: string
      placeTime: string
      selectionId: any
      colorName: string
      stake: number
      matchId: string,
      diviceInfo:any
    }>
  >
  userIp:string
}

const stack: number[] = [100, 200, 500, 1000, 5000, 10000, 20000]

const CasinoBetPlace: FC<Props> = ({ handleClose, betState, setBetState, userIp }) => {
  const [trigger, { data }] = useGetCasinoBetPlacedMutation()
  const handleStack = (val: number) => {
    setBetState(prev => ({
      ...prev,
      stake: val,
    }))
  }
  const handleStackChange = (e: any) => {
    const { value } = e.target
    setBetState(prev => ({
      ...prev,
      stake: Number(value),
    }))
  }

  const handleCasinoBetPlaced = () => {
    trigger({
      ...betState,
      userIp,
    })
  }


  useEffect(()=>{
    if(data){
      if(!data?.status){
        snackbarUtil.error(data?.message)
      }
      else{
        snackbarUtil.success(data?.message)
      }
    }
  }, [data])





  return (
    <div className="accordian-view-modals">
      <div className="card">
        <div className="card-header2">
          <div className="w-100">
            <h5 className="m-0">PLACE BET</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="personal-info-content">
            <table className="w-100">
              <thead>
                <tr>
                  <th>Bet for</th>
                  <th>Odds</th>
                  <th>Stake</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{betState?.colorName}</td>
                  <td>{betState?.odds}</td>
                  <td>
                    <input
                      type="text"
                      className="bet-input ng-pristine ng-valid ng-touched"
                      value={betState?.stake}
                      onChange={handleStackChange}
                    />
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
            <div className="tags">
              {stack?.map(num => (
                <div
                  key={num}
                  className="single-tag ng-star-inserted"
                  onClick={() => handleStack(num)}
                >
                  {num}{" "}
                </div>
              ))}
            </div>
            <div className="btns d-flex justify-content-between w-100">
              <button className="cancel" onClick={handleClose}>
                Cancel
              </button>
              <button className="submit" onClick={handleCasinoBetPlaced}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasinoBetPlace
