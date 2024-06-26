import { useState } from "react"
import "./GameDetails.scss"
import GameHeader from "./GameHeader/GameHeader"
import Scorecard from "./Score/Scorecard"
import NewMode from "./NewMode/NewMode"
import ClassicMode from "./ClassicMode/ClassicMode"
import PlaceBetModal from "./PlaceBetModal/PlaceBetModal"
import type { BetPlaceInterface } from "./type"
import { useOddsDataQuery } from "../../store/service/odds/oddsServices"
import { useParams } from "react-router-dom"

const GameDetails = () => {
  const [isClassicMode, setIsClassicMode] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
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
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {id} = useParams()

  const { data, isLoading } = useOddsDataQuery(id, {refetchOnMountOrArgChange: true});


  return (
    <>
      {!isClassicMode ? (
        <div className="main_game">
          <div className="mt-2 tab-content">
            <div className="tab-pane fade active show" id="ngb-nav-2-panel">
              <div>
                <GameHeader />
                <div className="row col-12 p-0 m-0 scoreBackground">
                  <div className="col-8 px-4 pt-4 column-full">
                    <Scorecard
                      setIsClassicMode={setIsClassicMode}
                      isClassicMode={isClassicMode}
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
          />
          <ClassicMode handleOpen={handleOpen}   data={data}/>
        </div>
      )}

      <PlaceBetModal onClose={handleClose} open={open} />
    </>
  )
}

export default GameDetails
