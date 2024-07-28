import { useMediaQuery } from "@mui/material";
import PlayerPlusComponent from "./PlayerPlusComponent/PlayerPlusComponent";
import "./T20.scss";

const T20 = ({ odds, t1, setOpen, setShowBetSection, setUpdated }:any) => {
  const mobile = useMediaQuery("(max-width: 768px)");
  const t2 = odds?.data.t2 || [];  
  return (
    <div className="t20_container">
      <table>
        <thead>
          <tr>
            <th>
              <span className="mob-view-casino">
              Min: {t1?.min} | Max:{" "}
                  {t1?.max}
              </span>
            </th>
            <th colSpan={mobile ? 2 : 1}>BACK</th>
            {/* <th style={{ display: mobile ? "none" : "" }}></th> */}
          </tr>
        </thead>
        <tbody>
          <PlayerPlusComponent setUpdated={setUpdated} setShowBetSection={setShowBetSection} setOpen={setOpen} showRateForFirstT2 t2={[t2[0], t2[1]]} showRateForSecondT2Also={undefined} title={undefined} setBetState={undefined} />
          <PlayerPlusComponent setUpdated={setUpdated} setShowBetSection={setShowBetSection} setOpen={setOpen} showRateForFirstT2 t2={[t2[2], t2[3]]} showRateForSecondT2Also={undefined} title={undefined} setBetState={undefined} />
        </tbody>
      </table>
    </div>
  );
};

export default T20;
