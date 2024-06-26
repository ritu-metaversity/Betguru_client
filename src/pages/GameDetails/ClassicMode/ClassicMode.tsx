import type { FC } from "react"
import ClassicMatchOdds from "./ClassicMatchOdds"
import "./Classic.scss"
import SessionClasic from "./SessionClasic"
import type { oddsResponse } from "../../../store/service/odds/odds"

interface Props {
  handleOpen: any
  data: oddsResponse | undefined
}

const ClassicMode: FC<Props> = ({ handleOpen, data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const keys = Object.keys(data);
  return (
    <div>
      <ClassicMatchOdds handleOpen={handleOpen} data={data?.Odds} />
      {keys.map((key) => {
        if (data[key]?.length !== 0 && key !== "Odds" && key !== "Bookmaker") {
          return <SessionClasic keyData={key} handleOpen={handleOpen} data={data[key]} />;
        }
        return null;
      })}
    </div>
  )
}

export default ClassicMode
