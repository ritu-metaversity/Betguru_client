import type { FC } from 'react'
import MatchOdds from '../MatchOdds/MatchOdds'
import Session from '../Session/Session'
import type { oddsResponse } from '../../../store/service/odds/odds';

interface Props{
  handleOpen:any;
  data: oddsResponse | undefined
}

const NewMode:FC<Props> = ({handleOpen, data}) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const keys = Object.keys(data);
  return (
    <><MatchOdds handleOpen={handleOpen} data={data?.Odds}/>
    {keys.map((key) => {
        if (data[key]?.length !== 0 && key !== "Odds" && key !== "Bookmaker") {
          return <Session keyData={key} handleOpen={handleOpen} data={data[key]} />;
        }
        return null;
      })}
    </>
  )
}

export default NewMode