import clsx from "clsx";
import "./PlayerPlus.scss";


const PlayerPlusComponent = ({
  t2,
  title,
  showRateForFirstT2,
  setShowBetSection,
  setBetState,
  setOpen,
  setUpdated,
  showRateForSecondT2Also,
  showPnl
}: any) => {
  const handleClick = (t2: { nation: any; rate: any; b1: any; mid: any; sid: any; }) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2?.nat,
        casinoName: 2,
        isBack: true,
        odds: Number(t2?.rate) || Number(t2?.b1),
        selectionId: t2?.sid,
        colorName: "back"
      }));
    setOpen(true);
    setShowBetSection(true);
    setUpdated(0)
  };


  return (
    <tr

    >
      <td className="dt1_head">{title || t2[0]?.nationEle || t2[0]?.nation}  
      {
        showPnl && <span className={t2[0]?.pnl >= 0 ? "text-success" : "text-danger"}> ({t2[0]?.pnl}) </span>
      }
      </td>
      <td
        className={clsx({
          "dt1_head": true,
          suspended: !t2[0]?.gstatus,
        })}
        onClick={() => {
          if (t2[0]?.gstatus) {
            handleClick(t2[0]);
          }
        }}
      >
        <p style={{
          fontWeight: 700,
        }}>{showRateForFirstT2 ? t2[0]?.rate || t2[0]?.b1 : t2[0]?.nation}</p>
         <span>0</span>
      </td>
      {
        showRateForSecondT2Also && <td
          onClick={() => handleClick(t2[1])}
          className={clsx({
            "dt1_head": true,
            suspended:
              // t2[0]?.gstatus &&
              !t2[1]?.gstatus || t2[1]?.gstatus !== "ACTIVE",
          })}
        >
          <p style={{
            fontWeight: 800
          }}>
            {showRateForSecondT2Also ? t2[1]?.rate || t2[1]?.b1 : t2[1]?.nation}
          </p>
          <span className={t2[1]?.pnl >= 0 ? "text-success" : "text-danger"}>{t2[1]?.pnl}</span>
        </td>
      }

    </tr>
  );
};

export default PlayerPlusComponent;
