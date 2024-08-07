import Slider from "react-slick";
import CardComp from "../CardComp/CardComp";


const settings = {
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const AndarBaharCardOnVideo = ({ t3 }: any) => {
  const ball = t3 && t3[0]?.ball ? t3[0]?.ball?.split(",") : [];
  const aall = t3 && t3[0]?.aall ? t3[0]?.aall?.split(",") : [];

  return (
    <>
      {(t3 && (t3[0]?.ball || t3[0]?.aall)) && (
        <div className="card_shown_on_top card_shown_on_top_andar_bahar " >
          <div className="round_id">Andar</div>
          <div style={{
            height: "40px",
            overflow: "hidden"
          }}>
            <Slider {...settings} className="ander_slick">
              {aall.map((sid: any) => {
                return (
                  <CardComp shown={true} card={sid} />
                )
              }
              )}
            </Slider>
          </div>

          <div className="round_id">Bahar</div>
          <div style={{
            height: "40px",
            overflow: "hidden"
          }}>
            <Slider {...settings} className="ander_slick">
              {ball.map((sid: any) => (
                <CardComp shown={true} card={sid} />
              ))}
            </Slider>
          </div>

        </div>
      )}
    </>
  );
};

export default AndarBaharCardOnVideo;
