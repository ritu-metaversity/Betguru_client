import type {  SetStateAction} from "react";
import { useEffect, useState } from "react";

import { Link, useParams  } from "react-router-dom";
import ResultModalContainer from "./ResultModalContainer";


const LastResult = ({ matchId }:any) => {
  const { id } = useParams();
  const [first, setFirst] = useState("");
  const [resultList, setResultList] = useState([]);

  // useEffect(() => {
  //   CasinoLiveApi.Casino_Data({
  //     value: tableIdtoUrl[id]
  //   }).then((res) => {
  //     setResultList(res?.data?.result);
  //   })
  //   .catch((error) => {
  //     setResultList([]);
  //   });
  // }, []);

  return (
    <>
      <ResultModalContainer
        mid={first}
        setMid={(mid: SetStateAction<string>) => setFirst(mid)} tableId={undefined}      />
      <div
        className="last_result"
        style={{ background: "#2c3e50" }}>
        Last Result
        <Link to={`/casinoresult/${id}`} className="ms-auto text-white last-font">
          View All
        </Link>
      </div>
      {/* <div className="w-100 text-end min-max-casino">
        {resultList?.map((item, index) => {
          return (
            <span
            key={item + index}
              style={{
                color: LetterAndColorById[id]?.[item.result]?.color,
              }}
              onClick={() => setFirst(item.mid)}
              className="ball_result">
              {LetterAndColorById[id]?.[item.result]?.label}
            </span>
          );
        })}
      </div> */}
    </>
  );
};

export default LastResult;