import { Box, Tab, Tabs } from "@mui/material"
import type { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
    handleClick: (id: number) => void
  value: number
}

const GameInfoTab: FC<Props> = ({ value, handleClick }) => {
  const item = ["Game Info", "Your Bets"]
  return (
    <div>
      <ul
        className="nav-tabs game_tablist"
        role="tablist"
      >
        {item?.map((item, id) => {
          return (
            <li className="nav-item" onClick={()=>handleClick(id)}>
              <Link
                to="#"
                className={`nav-link ${id === value ? "active" : ""}`}
                aria-controls="ngb-nav-0-panel"
              >
                {item}
              </Link>
            </li>
          )
        })}

        {/* <li className="nav-item">
          <Link
            to="#"
            className="nav-link"
          >
            Your Bets
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default GameInfoTab
