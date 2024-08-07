import { Grid } from '@mui/material'
import React from 'react'
import './style.scss'
import DTLMobile from './DTLMobile'

const DTL20 = () => {

    return (
        <div className="t20_container dtl_container">
            <Grid container className='d_view'>
                <Grid md={6} xs={12}>
                    <div className="casino-table-left-box">
                        <div className="casino-table-header">
                            <div className="casino-nation-detail" />
                            <div className="casino-odds-box1 back">Dragon</div>
                            <div className="casino-odds-box1 back">Tiger</div>
                            <div className="casino-odds-box1 back">Lion</div>
                        </div>
                        <div className="casino-table-body">
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">Winner</div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">
                                        Black
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
                                    </div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">
                                        Red
                                        <img
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
                                        />
                                    </div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>


                        </div>
                    </div>

                </Grid>
                <Grid md={6} xs={12}>
                    <div className="casino-table-right-box">
                        <div className="casino-table-header">
                            <div className="casino-nation-detail" />
                            <div className="casino-odds-box1 back">Dragon</div>
                            <div className="casino-odds-box1 back">Tiger</div>
                            <div className="casino-odds-box1 back">Lion</div>
                        </div>
                        <div className="casino-table-body">
                            <div className="casino-table-row">
                                <div className="casino-nation-detail">
                                    <div className="casino-nation-name">Odd</div>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
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
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                                <div className="casino-odds-box1 back suspended-box">
                                    <span className="casino-odds">0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid>
            <div className='mob_view_casino'>

                <DTLMobile />
            </div>
        </div>
    )
}

export default DTL20