import type { FC } from "react"
import React from "react"
import "./style.scss"

interface Props {
  HeadingName: { name: string; roundId: string }
}

const CasinoHeading: FC<Props> = ({ HeadingName }) => {
  return (
    <div className="casino-heading ng-tns-c76-0">
      <span className="card-header-title ng-tns-c76-0">
        {" "}
        {HeadingName?.name}{" "}
        <span className="ml-10 pointer ng-tns-c76-0">
          <i className="fa fa-arrow-right mr-10 ng-tns-c76-0" />
          RULES
        </span>
      </span>
      <span className="ng-tns-c76-0">Round ID: {HeadingName?.roundId}</span>
      <span className="single-tag ng-tns-c76-0">Time: 03:39:47 PM</span>
    </div>
  )
}

export default CasinoHeading
