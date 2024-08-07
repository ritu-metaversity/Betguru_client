import { Grid } from "@mui/material"
import React, { useState } from "react"

const casinoName = ["Dragon", "Tiger", "Lion"]

const DTLMobile = () => {
    const [active, setActive] = useState(0)

    const handleActive = (val: number) => {
        setActive(val)
    }

    return (
        <div>
            <ul className="dtl_nav_pills" role="tablist">
                {casinoName?.map((item, id) => (
                    <li
                        className="nav-item"
                        role="presentation"
                        onClick={() => handleActive(id)}
                    >
                        <button
                            type="button"
                            className={`nav-link ${active === id ? "active" : ""}`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>

            <Grid container sx={{
                marginTop: "7px"
            }}>
                <Grid xs={6}>
                    <div className="casino-table-left-box">
                        <div className="casino-table-body">
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">Winner</div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">
                                        Black
                                        <span className="card-icon ms-1">
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/hukum.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                                style={{ width: "10px", height: "auto" }}
                                            />
                                            <img
                                                src={`http://admin.kalyanexch.com/images/cards/cdee.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                                style={{ width: "10px", height: "auto" }}
                                            />
                                        </span>

                                    </div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">
                                        Red
                                        <span className="card-icon ms-1">
                                            <span className="card-red " ><img
                                                src={`http://admin.kalyanexch.com/images/cards/pan.png`}
                                                alt=""
                                                className="small_icon_image_card"
                                                style={{ width: "10px", height: "auto" }}
                                            />
                                                <img
                                                    src={`http://admin.kalyanexch.com/images/cards/eat.png`}
                                                    alt=""
                                                    className="small_icon_image_card"
                                                    style={{ width: "10px", height: "auto" }}
                                                /></span>
                                        </span>
                                    </div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </Grid>
                <Grid xs={6}>
                    <div className="casino-table-right-box">
                        <div className="casino-table-body">
                        <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">Odd</div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">Even</div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DTLMobile
