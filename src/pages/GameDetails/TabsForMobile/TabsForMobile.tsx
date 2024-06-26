import { Link } from 'react-router-dom'

const TabsForMobile = () => {
  return (
    <ul className="nav-tabs nav" style={{ display: "none" }}>
        <li className="nav-item">
          <Link to={"#"} id="ngb-nav-2" className="nav-link active" >
            Game Info
          </Link>
        </li>
        <li className="nav-item">
          <Link  to="#"  id="ngb-nav-3" className="nav-link">
            Your Bets
          </Link>
        </li>
      </ul>
  )
}

export default TabsForMobile