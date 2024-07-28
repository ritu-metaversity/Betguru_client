import CardComp from "../CardComp/CardComp";

interface T1Props {
  C1: string;
}

interface SingleCardOnVideoProps {
  t1: T1Props;
}

const SingleCardOnVideo: React.FC<SingleCardOnVideoProps> = ({ t1 }) => {
  return (
    <div className="card_shown_on_top">
      <div className="white desk-view-casino">Card</div>
      <div className="cards_container">
        <CardComp shown={t1.C1 !== "1"} card={t1.C1} />
      </div>
    </div>
  );
};

export default SingleCardOnVideo;
