import type { FC} from "react";
import clsx from "clsx";
import ToolTip from "../tooltip/Tooltip";


interface Props{
  t2:any, 
  noToolTip:any,
  setBetState:any, 
  className:any, 
  setOpen:any, 
  toolTipshow:any, 
  setShowBetSection:any,  
  setUpdated:any
}

const TwoButtonContainer:FC<Props> = ({ t2, noToolTip, setBetState, className, setOpen, toolTipshow, setShowBetSection,  setUpdated }) => {
  return (
    <div className="content_container">
      {
        toolTipshow && <div className="w-100 mt-1 view-casino">
        <ToolTip title={`Min: ${t2[0]?.min} Max: ${t2[0]?.max}`} placement={undefined}/>
      </div>
      }
       
      <div className={`${className} gap-3 casino-table-left-box`} >
        <SingleButton setOpen={setOpen}  setUpdated={setUpdated} setShowBetSection={setShowBetSection} setBetState={setBetState} odd={t2[0]} />
        <SingleButton setOpen={setOpen}  setUpdated={setUpdated} setShowBetSection={setShowBetSection} setBetState={setBetState} odd={t2[1]} />
      </div>
      {noToolTip && toolTipshow && (
        <div className="w-100 text-end min-max-casino" style={{ marginTop: "6px" }}>
          <span className="fw">Min:</span> <span>{t2[0]?.min}</span>{" "}
          <span className="fw">Max:</span> <span>{t2[0]?.max}</span>
        </div>
      )}
    </div>
  );
};

export default TwoButtonContainer;

interface Props2{
  odd:any, 
  setBetState:any,
  setOpen:any, 
  setShowBetSection:any, 
  setUpdated:any, 
 
}

export const SingleButton:FC<Props2> = ({ odd, setBetState, setOpen, setShowBetSection, setUpdated }) => {
  const handleClick = (status:string) => {
    if(status === "ACTIVE"){
      setOpen(true);
    }
    setBetState &&
      setBetState((prev:any) => ({
        ...prev,
        nation: odd?.nation,
        casinoName: 2,
        isBack: true,
        odds: Number(odd?.rate) || Number(odd?.b1),
        selectionId: odd?.sid,
        colorName: "back",
      }));
      setShowBetSection(true);
      setUpdated(0)
  };

  return (
    <div className="w-100 text-center aaa-odd-box" style={{overflow:"hidden"}}>
      <p className="rate_heading" style={{padding:'8px 0px'}}><b>{odd?.b1 || odd?.rate}</b> </p>
      <button
        onClick={()=>handleClick(odd?.gstatus)}
        className={clsx(
          "btn btn-primary casino-odds-box w-100 aaa-font",
          odd?.gstatus !== "ACTIVE" && !(odd?.gstatus === true) && "suspended"
        )}
        style={{
          textTransform: "uppercase",
          fontWeight: 600,
        }}>
        {odd?.nation?.replace("Dragon ", "").replace("Tiger ", "") == "Red" ? (
          <>
            <img
              src={`http://admin.kalyanexch.com/images/cards/pan.png`}
              alt=""
              className="small_icon_image_card"
            />
            <img
              src={`http://admin.kalyanexch.com/images/cards/eat.png`}
              alt=""
              className="small_icon_image_card"
            />
          </>
        ) : odd?.nation?.replace("Dragon ", "").replace("Tiger ", "") ==
          "Black" ? (
          <>
            <img
              src={`http://admin.kalyanexch.com/images/cards/hukum.png`}
              alt=""
              className="small_icon_image_card"
            />
            <img
              src={`http://admin.kalyanexch.com/images/cards/cdee.png`}
              alt=""
              className="small_icon_image_card"
            />
          </>
        ) : (
          odd?.nation?.replace("Dragon ", "").replace("Tiger ", "")
        )}
      </button>
      <p className={` pnl ${odd?.pnl >= 0? "text-success":"text-danger"}`}>
      {odd?.pnl}
      </p>
    </div>
  );
};
