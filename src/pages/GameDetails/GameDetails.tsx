import type { FC} from "react";
import { useEffect, useState } from "react"
import "./GameDetails.scss"
import GameHeader from "./GameHeader/GameHeader"
import Scorecard from "./Score/Scorecard"
import NewMode from "./NewMode/NewMode"
import ClassicMode from "./ClassicMode/ClassicMode"
import PlaceBetModal from "./PlaceBetModal/PlaceBetModal"
import type { BetPlaceInterface } from "./type"
import { useGetIpfyQuery, useOddsDataQuery } from "../../store/service/odds/oddsServices"
import { useParams } from "react-router-dom"
import moment from "moment"
import GameInfoTab from "./GameInfoTab";

interface Props{
  setHederName: React.Dispatch<React.SetStateAction<string>>
}

const GameDetails:FC<Props> = ({setHederName}) => {
  const [isClassicMode, setIsClassicMode] = useState<boolean>(false)
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [placeBetData, setPlaceBetData] = useState<BetPlaceInterface>({
    isFancy: false,
    isBack: false,
    odds: 0,
    stake: 0,
    marketName: "",
    selectionId: 0,
    priceValue: 0,
    placeTime: "",
    marketId: "",
    matchId: "",
    name: "",
    userIp: "",
    mode:"",
    deviceInfo: null,
  });
  const {id} = useParams<{ id: string }>();
  const { data, isLoading } = useOddsDataQuery(id, {pollingInterval:1000,refetchOnMountOrArgChange: true});
  const { data:userIp } = useGetIpfyQuery();

  


  const handleOpen = (isFancy: boolean, isBack: boolean, odds: number, marketName: string, selectionId: string, priceValue: number, marketId: string, name: string, mode: string, date:any) => {
    if (!id || !userIp) return;
    setPlaceBetData((prev)=>({
      ...prev,
      isFancy,
      isBack,
      odds,
      marketName,
      selectionId:selectionId,
      priceValue:odds,
      marketId,
      name,
      matchId:id,
      userIp:userIp?.ip,
      mode, 
      placeTime :moment(date).format("YYYY-MM-DD HH:mm:ss.SSS"),
      deviceInfo: {
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        browser: "Chrome",
        device: "Macintosh",
        deviceType: "desktop",
        os: "Windows",
        os_version: "windows-10",
        browser_version: "108.0.0.0",
        orientation: "landscape",
      },
    }));
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    if(data){
      if(data?.Odds){
        setHederName(data?.Odds[0]?.matchName)
      }
    }
  },[data])

   const handleClick = (id:number) => {
    setValue(id);
  };
  return (
    <>
    <GameInfoTab value={value} handleClick={handleClick}/>
    {
      value === 0 ? <>
      {!isClassicMode ? (
          <div className="main_game">
            <div className="mt-2 tab-content">
              <div className="tab-pane fade active show" id="ngb-nav-2-panel">
                <div>
                  <GameHeader data={data?.Odds}/>
                  <div className="row col-12 p-0 m-0 scoreBackground">
                    <div className="col-8 px-4 pt-4 column-full">
                      <Scorecard
                        setIsClassicMode={setIsClassicMode}
                        isClassicMode={isClassicMode}
                        id={id}
                        claName="new_mod"
                      />
                      <NewMode handleOpen={handleOpen} data={data}/>
                    </div>
                    <div
                      className="col-4 column-full"
                      style={{ backgroundColor: "#f1f0f5" }}
                    >
                      <div
                        className="side-section"
                        style={{ padding: "13px 10px 5rem" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="old-match-component">
            <Scorecard
              setIsClassicMode={setIsClassicMode}
              isClassicMode={isClassicMode}
              id={id}
              claName="clasic_mod"
            />
            <ClassicMode handleOpen={handleOpen}   data={data}/>
          </div>
        )}
      </>:<div>No Data Found</div>
    }
    
      

      <PlaceBetModal  onClose={handleClose} open={open} placeBetData={placeBetData} setPlaceBetData={setPlaceBetData}/>
    </>
  )
}

export default GameDetails
