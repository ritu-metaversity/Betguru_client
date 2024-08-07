import { useNavigate } from "react-router-dom"
import { useCasinoListQuery } from "../../store/service/userServices/userServices"

const Casino = () => {
  const { data } = useCasinoListQuery()
  const nav = useNavigate()

  const handleNavigate = (item: any) => {
    const link = item?.name?.split(" ").join("").toLowerCase();
    const name:any = {
      "teenpatti":51,
      "andarbahar":60,
      "dragontiger":52,
      "amarakbaranthony":54,
      "bollywoodcasino":55,
      "lucky7a":53,
      "dragontigerlion":61
    }
    // if(link === "andarbahar"){
    //   nav(`/andarbahar/${item?.tableId}`)
    // }else{
      nav(`/casino/${name[link]}/${item?.tableId}`)
    // }
  }

  return (
    <div className="main_dash">
      <div className="p-10 bg-color" style={{ padding: 30 }}>
        <div className="row m-0 header">
          <h1 className="col-9">CASINO</h1>
        </div>
        <div>
          <div className="row_casino">
            {data?.data?.map(item => (
              <div
                className="game-container"
                onClick={() => handleNavigate(item)}
              >
                <div style={{ padding: "0 10px" }}>
                  <div style={{ cursor: "pointer" }}>
                    <img src={item?.image} className="misc-games" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Casino
