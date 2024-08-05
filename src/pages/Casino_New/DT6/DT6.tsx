// import ToolTip from "../tooltip/Tooltip";
import { Grid } from "@mui/material";
import PlayerPlusComponent from "../T20/PlayerPlusComponent/PlayerPlusComponent";
import { SingleButton } from "../TwoButtonContainer/TwoButtonContainer";
import DT1DaySpecial4Component from "./DT1DaySpecial4Component";
import PlayerBackLayTR from "./PlayerBackLayTR";
import "./dt1day.scss";

const DT6 = ({ odds, setShowBetSection, setBetState, setOpen, setUpdated }) => {
    const { t2BySid } = odds;
    console.log(t2BySid, "t2BySidt2BySid")
    return (
        <>
            <div className="t20_container ">
                <div className="d-flex dt1day_container flex-wrap">
                    <Grid container>
                        <Grid md={6} xs={12}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>

                                            <span className="mob-view-casino">
                                                Min:{t2BySid[1]?.min} Max: {t2BySid[1]?.max}
                                            </span>
                                        </th>
                                        <th style={{ textTransform: "uppercase" }}>Back</th>
                                        <th className="lay" style={{ textTransform: "uppercase" }}>Lay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PlayerBackLayTR
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        showRateForFirstT2
                                        showRateForSecondT2Also
                                        setOpen={setOpen}
                                        t2={t2BySid["1"]}
                                        setUpdated={setUpdated}
                                    />
                                    <PlayerBackLayTR
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        showRateForFirstT2
                                        showRateForSecondT2Also
                                        setOpen={setOpen}
                                        t2={t2BySid["2"]}
                                        setUpdated={setUpdated}
                                    />
                                </tbody>
                            </table>
                        </Grid>
                        <Grid md={6} xs={12}>
                            <div className="content_container flex-fill">
                                <SingleButton
                                    setOpen={setOpen}
                                    odd={t2BySid["3"]}
                                    setShowBetSection={setShowBetSection}
                                    setBetState={setBetState}
                                    setUpdated={setUpdated}
                                />
                                <div className="mob-view-casino" style={{ textAlign: "right", padding: "12px 3px 0px" }}>
                                    <span>
                                        Min:{t2BySid[3]?.min} Max:{t2BySid[3]?.max}
                                    </span>
                                </div>
                            </div>
                        </Grid>

                    </Grid>

                    <Grid container>
                        <Grid md={6} xs={12}> <table>
                            <thead>
                                <tr>
                                    <th>

                                        <span className="mob-view-casino">
                                            Min:{t2BySid[4]?.min} Max:{t2BySid[4]?.max}
                                        </span>
                                    </th>
                                    <th>Even </th>
                                    <th>Odd</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {Array(9)} */}
                                <PlayerPlusComponent
                                    setOpen={setOpen}
                                    showRateForFirstT2
                                    showRateForSecondT2Also
                                    title="Dragon"
                                    setShowBetSection={setShowBetSection}
                                    setBetState={setBetState}
                                    t2={[t2BySid["4"], t2BySid["5"]]}
                                    setUpdated={setUpdated}
                                />{" "}
                                <PlayerPlusComponent
                                    setOpen={setOpen}
                                    title="Tiger"
                                    showRateForFirstT2
                                    showRateForSecondT2Also
                                    setShowBetSection={setShowBetSection}
                                    setBetState={setBetState}
                                    t2={[t2BySid["12"], t2BySid["13"]]}
                                    setUpdated={setUpdated}
                                />
                            </tbody>
                        </table></Grid>
                        <Grid md={6} xs={12}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>

                                            <span className="mob-view-casino">
                                                Min:{t2BySid[6]?.min} Max:{t2BySid[6]?.max}
                                            </span>
                                        </th>
                                        <th>
                                            Red
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
                                        </th>
                                        <th>
                                            Black
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
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PlayerPlusComponent
                                        setOpen={setOpen}
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        showRateForFirstT2
                                        showRateForSecondT2Also
                                        title="Dragon"
                                        t2={[t2BySid["6"], t2BySid["7"]]}
                                        setUpdated={setUpdated}
                                    />{" "}
                                    <PlayerPlusComponent
                                        setOpen={setOpen}
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        title="Tiger"
                                        showRateForFirstT2
                                        showRateForSecondT2Also
                                        t2={[t2BySid["14"], t2BySid["15"]]}
                                        setUpdated={setUpdated}
                                    />
                                </tbody>
                            </table></Grid>
                    </Grid>



                    <Grid container>
                        <Grid xs={12}>
                            <table className="w-100">
                                <thead>
                                    <tr className="dt1dayCompTr">
                                        <th>

                                        </th>
                                        <th>
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/hukum.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                            />
                                        </th>
                                        <th>
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/pan.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                            />
                                        </th>
                                        <th>
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/cdee.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                            />
                                        </th>
                                        <th>
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/eat.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <DT1DaySpecial4Component
                                        setOpen={setOpen}
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        title="Dragon"
                                        t2={[t2BySid["8"], t2BySid["9"], t2BySid["10"], t2BySid["11"]]}
                                        setUpdated={setUpdated}
                                    />{" "}
                                    <DT1DaySpecial4Component
                                        setOpen={setOpen}
                                        setShowBetSection={setShowBetSection}
                                        setBetState={setBetState}
                                        title="Tiger"
                                        setUpdated={setUpdated}
                                        t2={[
                                            t2BySid["16"],
                                            t2BySid["17"],
                                            t2BySid["18"],
                                            t2BySid["19"],
                                        ]}
                                    />
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </>
    );
};

export default DT6;
