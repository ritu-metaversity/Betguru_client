import type { FC } from "react"
import MatchOdds from "../MatchOdds/MatchOdds"
import Session from "../Session/Session"
import type { oddsResponse } from "../../../store/service/odds/odds"
import BookMaker from "./BookMaker"

interface Props {
  handleOpen: any
  data: oddsResponse | undefined
}

const NewMode: FC<Props> = ({ handleOpen, data }) => {
  if (!data) {
    return <div>No data available</div>
  }

  const keys = Object.keys(data)
  return (
    <>
      <MatchOdds handleOpen={handleOpen} data={data?.Odds} />
      {keys.map(key => {
        if (
          key === "Bookmaker" &&
          data[key as keyof oddsResponse]?.length !== 0
        ) {
          return (
            <BookMaker
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
            <Session
              keyData={key}
              handleOpen={handleOpen}
              data={data[key as keyof oddsResponse]}
            />
          )
        }
        return null
      })}
    </>
  )
}

export default NewMode
