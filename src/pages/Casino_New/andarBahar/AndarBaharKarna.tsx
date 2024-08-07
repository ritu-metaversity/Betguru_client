import "./andarBahar.scss";
import Slider from "react-slick";

const settings = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
};
const AndarBaharKarna = ({ odds, setOpen, setShowBetSection, setBetState, setUpdated }: any) => {
  const { t2BySid, t2 } = odds;

  const bShownCards = t2BySid["undefined"];
  const br = bShownCards?.br ? bShownCards?.br?.split(",") : [];
  const ar = bShownCards?.ar ? bShownCards?.ar?.split(",") : [];
  return (
    <div className="andar_bahar">
      <div className="andar_bahar_row andar_color">
        <div className="andar_bahar_label border-end border-black">Andar</div>
        <div className="px-4 d-sm-none">
          <Slider {...settings}>
            {[...Array(13).keys()].map((sid) => (
              <CardCompAB setOpen={setOpen} setShowBetSection={setShowBetSection} setUpdated={setUpdated}
                setBetState={setBetState} sid={sid + 1 + ""} br={ar} t2BySid={t2BySid} />
            ))}
          </Slider>
        </div>
        <div className="andar_bahar_t2_card_container">
          {[...Array(13).keys()].map((sid) => (
            <CardCompAB setOpen={setOpen} setShowBetSection={setShowBetSection} setUpdated={setUpdated}
              setBetState={setBetState} sid={sid + 1 + ""} br={ar} t2BySid={t2BySid} />
          ))}
        </div>
      </div>
      <div className={`andar_bahar_row bahar_color ${window.innerWidth < 800 ? "mt-2 mb-2" : ""}`}>
        <div className="andar_bahar_label border-end border-black">Bahar</div>
        <div className="px-4 d-sm-none">
          <Slider {...settings}>
            {[...Array(13).keys()].map((sid) => (
              <CardCompAB setOpen={setOpen} setShowBetSection={setShowBetSection} setUpdated={setUpdated}
                setBetState={setBetState} sid={sid + 21 + ""} br={br} t2BySid={t2BySid} />
            ))}
          </Slider>
        </div>
        <div className="andar_bahar_t2_card_container">
          {[...Array(13).keys()].map((sid) => (
            <CardCompAB setOpen={setOpen} setShowBetSection={setShowBetSection} setUpdated={setUpdated}
              setBetState={setBetState} sid={sid + 21 + ""} br={br} t2BySid={t2BySid} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CardCompAB = ({
  sid,
  br,
  t2BySid,
  setOpen,
  setShowBetSection,
  setUpdated,
  setBetState
}: any) => {
  const handleClick = (t2: any) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2?.nation,
        casinoName: 2,
        isBack: true,
        odds: Number(t2.rate) || Number(t2.b1),
        selectionId: t2.sid,
        colorName: "back"
      }));
    setOpen(true);
    setShowBetSection(true);
    setUpdated(0)
  };
  // console.log(t2BySid[sid]?.gstatus, "sidsidsidsidsid")
  return (
    <div onClick={() => t2BySid[sid]?.gstatus && handleClick(t2BySid[sid])}>
      <img
        alt=""
        src={
          "/img/CARD " +
          (br.length
            ? br.includes(`${sid}`)
              ? t2BySid[sid]?.nation
                .replace("Bahar ", "")
                .replace("Ander ", "")
                .toUpperCase()
              : "0"
            : t2BySid[sid]?.nation
              .replace("Bahar ", "")
              .replace("Ander ", "")
              .toUpperCase()) +
          ".png"
        }
      />

      <div className="mb-n1 desk-view-casino">{t2BySid[sid]?.pnl}</div>
    </div>
  );
};
export default AndarBaharKarna;
