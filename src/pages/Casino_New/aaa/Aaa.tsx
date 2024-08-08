import { useMemo } from "react";
import "./aaa.scss";
import clsx from "clsx";
import AaaMob from "./AaaMob";
import ToolTip from "../tooltip/Tooltip";
import TwoButtonContainer from "../TwoButtonContainer/TwoButtonContainer";
import BCardContainer from "../bollywoodTable/BCardContainer";

const abc = ["A", "B", "C", "D", "E"];
const Aaa = ({ odds, setShowBetSection, setBetState, setOpen, setUpdated }: any) => {
  const t2 = odds?.t2 || [];

  const t2BySid = useMemo(() => {
    return t2.reduce((accu: any, curr: any) => {
      accu[curr?.sid] = curr;
      return accu;
    });
  }, [odds]);

  const handleClick = (odd: any, isBack: boolean, status: string) => {
    if (status === "ACTIVE") {
      setOpen(true);
    }
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: odd?.nation,
        casinoName: 2,
        isBack: isBack,
        odds: Number(odd?.rate) || Number(odd?.b1),
        selectionId: odd?.sid,
        colorName: isBack ? "back" : "lay"
      }));
    setShowBetSection(true);
    setUpdated(0)
  };


  return (
    <>
      <div className="content_container aaa-container desk-view-casino">
        <div className="w-100 ">
          <ToolTip title={`Min: ${t2[0]?.min} Max: ${t2[0]?.max}`} placement={undefined} />
        </div>
        <div className="casino-table-box ">
          {t2?.map((item: any, index: number) =>
            item?.gtype === "aaa" ? (
              <div className="col-4 text-center aaa-font casino-odd-box-container">
                <div className="casino-nation-name">
                  <span className="d-block ">
                    <b>
                      <span className="text-danger text-capitalize">
                        {abc[index]}.
                      </span>
                      {item?.nation}
                    </b>
                  </span>
                </div>
                <div
                  className={clsx({
                    "aaa-button": true,
                    clearfix: true,
                    suspended: item?.gstatus !== "ACTIVE",
                  })}>
                  <button
                    onClick={() => item?.gstatus &&
                      handleClick({ ...item, rate: item?.b1 || "" }, true, item?.gstatus)
                    }
                    className="back">
                    <span className="odd">{item?.b1}</span>
                  </button>{" "}
                  <button
                    onClick={() =>
                      item?.gstatus &&
                      handleClick({ ...item, rate: item?.l1 || "" }, false, item?.gstatus)
                    }
                    className="lay">
                    <span className="odd">{item?.l1}</span>
                  </button>

                </div>
                <div className={item?.pnl > 0 ? "text-success" : "text-danger"} style={{
                  textAlign: "center",
                  display: "block",
                  margin: "auto"
                }}>
                  {item?.pnl}
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className="row mob-view-casino">
        <AaaMob t2={t2} abc={abc} handleClick={handleClick} />
      </div>
      <div className="fancy_aaa_container mt-3">
        <TwoButtonContainer
          setUpdated={setUpdated}
          toolTipshow={true}
          setOpen={setOpen}
          className={"d-block"}
          setShowBetSection={setShowBetSection}
          setBetState={setBetState}
          t2={[t2BySid["4"], t2BySid["5"]]} noToolTip={undefined} />
        <TwoButtonContainer
          setUpdated={setUpdated}
          toolTipshow={true}
          setOpen={setOpen}
          className={"d-block"}
          setShowBetSection={setShowBetSection}
          setBetState={setBetState}
          t2={[t2BySid["6"], t2BySid["7"]]} noToolTip={undefined} />
        <TwoButtonContainer
          setUpdated={setUpdated}
          toolTipshow={true}
          setOpen={setOpen}
          className={"d-block"}
          setShowBetSection={setShowBetSection}
          setBetState={setBetState}
          t2={[t2BySid["21"], t2BySid["22"]]} noToolTip={undefined} />
      </div>
      {/* <div className="mt-3">
        <BCardContainer
        setUpdated={setUpdated}
          setOpen={setOpen}
          setBetState={setBetState}
          setShowBetSection={setShowBetSection}
          t2={t2?.filter((item:any) =>
            item?.nation?.toLowerCase().includes("card")
          )}
        />
      </div> */}
    </>
  );
};

export default Aaa;
