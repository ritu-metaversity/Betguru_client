import accPlus from "../../Img/Accordian-plus.png"
import accMinus from "../../Img/Accordian-minus.png"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import styled from "styled-components"
import {type FC, useState } from "react"
import { UserProfile } from "../../store/service/userServices/user"
import moment from "moment"

// Styled components
const StyledAccordion = styled(Accordion)`
  && {
    margin-bottom: 0.8rem;
    border: unset;
    position: unset;
    padding: 7px 4px;
    box-shadow: unset;
  }
`

const AccordionTitle = styled.h5`
  margin: 0;
`

interface Props{
    handleOpen:any;
    userData:  {
        userId: string;
        username: string;
        contact: string;
        dateOfJoining: string;
        address: string;
        helpline: string;
        rateDifference: number;
    } | undefined
}

const ProfileMobileView:FC<Props> = ({handleOpen, userData}) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const getIcon = (panel: string) => (expanded === panel ? accMinus : accPlus)

  return (
    <div className="profile_acc" style={{marginTop:"18px"}}>
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<img src={getIcon("panel1")} alt="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <AccordionTitle>PERSONAL INFORMATION</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails sx={{ marginTop: "-20px" }}>
          <div
            role="tabpanel"
            id="ngb-panel-0"
            aria-labelledby="ngb-panel-0-header"
            className="collapse show"
            style={{}}
          >
            <div className="card-body">
              <div className="personal-info-content">
                <div className="personal-info-single">
                  <div className="personal-info-single-label">client code</div>
                  <div className="content">{userData?.userId}</div>
                </div>
                <div className="personal-info-single">
                  <div className="personal-info-single-label">Client Name</div>
                  <div className="content">{userData?.username}</div>
                </div>
                <div className="personal-info-single">
                  <div className="personal-info-single-label">contact no</div>
                  <div className="content">{userData?.contact}</div>
                </div>
                <div className="personal-info-single">
                  <div className="personal-info-single-label">
                    Date Of Joining
                  </div>
                  <div className="content">{moment(userData?.dateOfJoining).format('MMMM DD, YYYY')} </div>
                </div>
                <div className="personal-info-single">
                  <div className="personal-info-single-label">Address</div>
                  <div className="content">{userData?.address}</div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<img src={getIcon("panel2")} alt="icon" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <AccordionTitle>COMPANY INFORMATION</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails sx={{ marginTop: "-20px" }}>
          <div className="card-body">
            <div className="personal-info-content">
              <div className="personal-info-single">
                <div className="personal-info-single-label">HELP LINE NO</div>
                <div className="content">{userData?.helpline}</div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<img src={getIcon("panel3")} alt="icon" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <AccordionTitle>RATE INFORMATION</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails sx={{ marginTop: "-20px" }}>
          <div className="card-body">
            <div className="personal-info-content">
              <div className="personal-info-single">
                <div className="personal-info-single-label">
                  rate difference
                </div>
                <div className="mobile-rate row justify-content-between">
                  <select value={userData?.rateDifference} className="ng-untouched ng-pristine ng-valid">
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                  </select>
                  <div className="rate-gryRow3">
                    <button className="updateBtn">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<img src={getIcon("panel4")} alt="icon" />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <AccordionTitle>Change Theme</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails sx={{ marginTop: "-20px" }}>
          <div className="card-body">
            <div _nghost-iec-c65="">
              <div className="color-selection">
                <h2>Theme color</h2>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(37, 36, 54)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(219, 64, 149)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(0, 136, 204)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(94, 171, 43)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(233, 80, 74)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(128, 0, 0)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(128, 128, 0)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(0, 0, 128)" }}
                  />
                </span>
                <span>
                  <label
                    htmlFor="primary_color_2"
                    style={{ backgroundColor: "rgb(128, 0, 128)" }}
                  />
                </span>
                {/**/}
              </div>
            </div>
            {/**/}
          </div>
        </AccordionDetails>
      </StyledAccordion>

      <div className="btn full-div">
        <button
          data-toggle="modal"
          data-target="#exampleModal"
          className="change-pass"
          onClick={handleOpen}
        >
          CHANGE PASSWORD
        </button>
      </div>
    </div>
  )
}

export default ProfileMobileView
