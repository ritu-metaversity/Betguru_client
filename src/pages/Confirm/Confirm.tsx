import React, { useEffect, useState } from "react"
import "./conform.scss"
import welComeImg from "../../Img/welcome-screen-bg.png"
import andWle from "../../Img/Andriod-welcome-screen.png"
import { useNavigate } from "react-router-dom"

const Confirm = () => {
  const [termShow, setTermShow] = useState(false);
  const nav = useNavigate();

  const hanldeNxtCont = () => {
    setTermShow(!termShow)
  }
  useEffect(()=>{
    if(localStorage.getItem("client-token") !== null){
      nav('/cricket');
    }
  }, [])
  return (
    <div className="ng-star-inserted main_conform">
      <div className="d-flex head">
        <img
          src={welComeImg}
          alt="Snow"
          className="ful-bg"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        {!termShow ? (
          <div className="mainContainer ng-star-inserted">
            <div className="welconeHead">
              <div className="title">BetGuru.net</div>
              <div className="download">
                <img src={andWle} alt="" className="download-andriod" />{" "}
                Download APK{" "}
              </div>
            </div>
            <div className="welconeBox">
              <div className="first">Welcome to</div>
              <div className="second">BetGuru</div>
              <div className="third">
                Dear Clients, <br /> अगर कोई सेशन रनिंग मै चल रहा है और टीम जीत
                जाती है या आलआउट हो जाती है तो सेशन डिक्लेअर होगा।
              </div>
              <div>
                <button onClick={hanldeNxtCont}>Continue</button>
              </div>
            </div>
          </div>
        ) : (
            <div  className="termMainContainer">
            <div  className="welconeHead terms-heading">
              <div  className="title">
                BetGuru.net
              </div>
              <div  className="download">
                <img
                  
                  _ngcontent-rfm-c20=""
                  src={andWle}
                  alt=""
                  className="download-andriod"
                />{" "}
                Download APK{" "}
              </div>
            </div>
            <div  className="termBox">
              <div  className="head">
                Terms &amp; Conditions
              </div>
              <div  className="termBox-overflow">
                <div  className="hindi">
                  1. लोगिन करने के बाद अपना पासवर्ड बदल लें।
                </div>
                <div  className="hindi">
                  {" "}
                  2. प्रत्येक गेम के लिए 100/- Coins चार्ज और टेस्ट गेम में प्रतिदिन 100/-
                  coins चार्ज रहेगा।{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  3. गेम रद्द होने या टाई होने पर मैच के सभी सौदे रद्द माने जायेंगे और जो
                  सेशन पुरे हो चुके हे, उनके हिसाब से ही Coins कम या ज्यादा होंगे ।{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  4. मैच के दौरान भाव को देख व समझ के ही सौदा करे। किये गए किसी भी सौदे को
                  हटाया या बदला नहीं जाएगा। सभी सौदे के लिए स्वयं आप ही जिम्मेदार होंगे।{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  5. मैच या सेशन भाव गलत चलने पर जो भी मैच या सेशन के सौदे हुए हे वह स्वतः
                  हट जायेंगे।{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  6. मैच में जो सेशन कम्पलीट होंगे सिर्फ उनके हिसाब से कॉइन कम या ज्यादा
                  होंगे और जो सेशन कम्पलीट नहीं हुए है बो सारे सेशन रद्द हो जाएंगे|{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  7. मैच मैं ओवर कम होने पर एडवांस सेसन फैंसी कैंसल हो जाएंगी|{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  8. मैच में ओवर कम होने पर अगर सेम टीम दुबारा खेलने के लिए आती है तो जो
                  रनिंग में प्लेयर के रन और पार्टनरशीप डिक्लेयर होगी। अगर ओवर कम होने पर
                  दूसरी टीम खेलने के लिए आती है तो जो रनिंग में प्लेयर रन, पार्टनरशीप रद्द
                  हो जाएंगे{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  9. प्लेयर के रिटायर्ड हर्ट या इंजर्ड होने पर प्लेयर के रन डिक्लेअर किये
                  जायेंगे|{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  10. सेशन को डिक्लेअर और कैंसिल करने के लिए कंपनी का निर्णय अन्तिम होगा|
                  ऐसी स्थिति में किसी भी तरह का वाद-विवाद मान्य नहीं होगा|{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  11. टेस्ट में पारी डिक्लेअर होने पर जो सेशन रनिंग में हे उस सेशन को
                  डिक्लेअर करने के लिए दूसरी टीम के ओवर या बॉल काउंट किये जायेंगे|{" "}
                </div>
                <div  className="hindi">
                  {" "}
                  नोट : सर्वर या वेबसाईट में किसी तरह की खराबी आने या बंद हो जाने पर केवल
                  किये गए सौदे ही मान्य होंगे। ऐसी स्थिति में किसी भी तरह का वाद-विवाद
                  मान्य नहीं होगा।{" "}
                </div>
              </div>
              <div  className="terms-btn">
                <button onClick={()=>nav('/cricket')}>Continue</button>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  )
}

export default Confirm
