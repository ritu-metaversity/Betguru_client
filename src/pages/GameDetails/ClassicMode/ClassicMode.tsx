import type { FC } from "react"
import ClassicMatchOdds from "./ClassicMatchOdds"
import "./Classic.scss"
import SessionClasic from "./SessionClasic"
import type { oddsResponse } from "../../../store/service/odds/odds"
import BookMakerClasic from "./BookMakerClasic"

interface Props {
  handleOpen: any
  data: oddsResponse | undefined
}

const ClassicMode: FC<Props> = ({ handleOpen, data }) => {
  if (!data) {
    return <div>No data available</div>
  }

  const keys = Object.keys(data)
  return (
    <div>
      <ClassicMatchOdds handleOpen={handleOpen} data={data?.Odds} />
      {keys.map(key => {
        if (key === "Bookmaker" &&
          data[key as keyof oddsResponse]?.length !== 0
        ) {
          return (
            <BookMakerClasic
              keyData={key}
              handleOpen={handleOpen}
              data={data[key as keyof oddsResponse]}
            />
          )
        }
        return null
      })}
      {keys.map(key => {
        if (
          key !== "Odds" &&
          key !== "Bookmaker" &&
          data[key as keyof oddsResponse]?.length !== 0
        ) {
          return (
            <SessionClasic
              keyData={key}
              handleOpen={handleOpen}
              data={data[key as keyof oddsResponse]}
            />
          )
        }
        return null
      })}
    </div>
  )
}

export default ClassicMode
