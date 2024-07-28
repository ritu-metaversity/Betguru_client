import { Link } from "react-router-dom"
import './style.scss'

const LastResult = () => {
  return (
    <div className="results-container ">
      <div className="casino-title mt-1 ">
        {" "}
        Last Result{" "}
        <Link to="#" className="m-r-5 game-rules-icon ">
          <span className="">View All</span>
        </Link>
      </div>
      <div className="">
        <p className="text-right ball-by-ball mt-2 " style={{
            paddingTop:"7px",
            paddingBottom:"0px"
        }}>
          <span className=" cards-done four ml-1 pointer ">
            B
          </span>

          <span className=" cards-done  wide">
            A
          </span>

          <span className=" cards-done  wide">
            A
          </span>

          <span className=" cards-done four ml-1 pointer ">
            B
          </span>

          <span className=" cards-done  ">
            A
          </span>

          <span className=" cards-done  wide">
            A
          </span>

          <span className=" cards-done four ml-1 pointer ">
            B
          </span>

          <span className=" cards-done  wide">
            A
          </span>

          <span className=" cards-done four ml-1 pointer ">
            B
          </span>

          <span className=" cards-done four ml-1 pointer ">
            B
          </span>
        </p>
      </div>
    </div>
  )
}

export default LastResult
