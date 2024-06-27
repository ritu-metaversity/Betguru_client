import { useCasinoListQuery } from "../../store/service/userServices/userServices"

const Casino = () => {
  const { data } = useCasinoListQuery()
  return (
    <div className="main_dash">
      <div className="p-10 bg-color" style={{ padding: 30 }}>
        <div className="row m-0 header">
          <h1 className="col-9">CASINO</h1>
        </div>
        <div>
          <div className="row_casino">
            {data?.data?.map(item => (
              <div className="game-container">
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
