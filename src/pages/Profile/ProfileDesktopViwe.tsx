import {useEffect, useState, type FC } from "react"
import moment from 'moment';
import { listenToThemeChange } from "../../utils/themeEvent";

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
    } | undefined;
    setRateValue: React.Dispatch<React.SetStateAction<number>>;
    handleUpadetRate: () => void,
     rateValue: number
}


const ProfileDesktopView:FC<Props> = ({handleOpen, userData, setRateValue, handleUpadetRate, rateValue}) => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "default-theme1");

  useEffect(()=>{
    if(userData && userData?.rateDifference){
      setRateValue(userData?.rateDifference);
    }
  }, [setRateValue, userData])

  const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRateValue(parseInt(e.target.value)); 
  };


  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);
  return (
    <div>
      <div className="ng-star-inserted">
        <div
          className="p-10 bg-color hide-on-mobile-acordian"
          style={{ padding: 30 }}
        >
          <div className="row m-0">
            <div className="header_profile" >
              <h1 style={{margin:0}}>MY PROFILE</h1>
              <div  style={{ textAlign: "right" }}>
                <button
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className={`passwordBtn ${themeColor}1`}
                  onClick={handleOpen}
                >
                  Change Password
                </button>
              </div>
            </div>
            <div className="row col-12 rowMain">
              <div className="left_profile">
                <div className="profileInfo">
                  <div className="head">PERSONAL INFORMATION</div>
                  <div className="bg-gry">
                    <div className="bg-gryRow">client code</div>
                    <div className="bg-gryRow2">{userData?.userId}</div>
                  </div>
                  <div className="bg-gryWhite">
                    <div className="bg-gryRow">Client Name</div>
                    <div className="bg-gryRow2 CLient-nme">{userData?.username}</div>
                  </div>
                  <div className="bg-gry">
                    <div className="bg-gryRow">contact no</div>
                    <div className="bg-gryRow2">{userData?.contact}</div>
                  </div>
                  <div className="bg-gryWhite">
                    <div className="bg-gryRow">Date Of Joining</div>
                    <div className="bg-gryRow2"> {moment(userData?.dateOfJoining).format('MMMM DD, YYYY')} </div>
                  </div>
                  <div className="bg-gry">
                    <div className="bg-gryRow">Address</div>
                    <div className="bg-gryRow2">{userData?.address}</div>
                  </div>
                </div>
              </div>
              <div className="left_profile" >
                <div className="companyInfo ml-3">
                  <div className="head">PERSONAL INFORMATION</div>
                  <div
                    className="bg-gry"
                    style={{ borderRadius: "0 0 8px 8px" }}
                  >
                    <div className="bg-gryRow">help line no</div>
                    <div className="bg-gryRow2"> {userData?.helpline}</div>
                  </div>
                </div>
                <div className="rate ml-3">
                  <div className="head">RATE INFORMATION</div>
                  <div
                    className="bg-gry"
                    style={{ borderRadius: "0 0 8px 8px" }}
                  >
                    <div className="rate-gryRow">Rate difference</div>
                    <div className="rate-gryRow2 bg-gryRow2">
                      <select
                        id="num"
                        className="num ng-untouched ng-pristine ng-valid"
                        value={rateValue}
                        onChange={handleRateChange}
                      >
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                      </select>
                    </div>
                    <div className="rate-gryRow3">
                      <button className={`updateBtn ${themeColor}1`} onClick={handleUpadetRate}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDesktopView
