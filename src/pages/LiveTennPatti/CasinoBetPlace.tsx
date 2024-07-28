import type { FC } from 'react';
import './placebet.scss';


interface Props{
    handleClose: () => void
}

const CasinoBetPlace:FC<Props> = ({handleClose}) => {
  return (
    <div className="accordian-view-modals">
      <div className="card">
        <div className="card-header2">
          <div className="w-100">
            <h5 className="m-0">PLACE BET</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="personal-info-content">
            <table className="w-100">
              <thead>
                <tr>
                  <th>Bet for</th>
                  <th>Odds</th>
                  <th>Stake</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ander</td>
                  <td>0.95</td>
                  <td>
                    <input
                      type="text"
                      className="bet-input ng-pristine ng-valid ng-touched"
                    />
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
            <div className="tags">
              <div className="single-tag ng-star-inserted">100 </div>
              <div className="single-tag ng-star-inserted">200 </div>
              <div className="single-tag ng-star-inserted">500 </div>
              <div className="single-tag ng-star-inserted">1000 </div>
              <div className="single-tag ng-star-inserted">2000 </div>
              <div className="single-tag ng-star-inserted">5000 </div>
              <div className="single-tag ng-star-inserted">10000 </div>
              {/**/}
            </div>
            <div className="btns d-flex justify-content-between w-100">
              <button className='cancel' onClick={handleClose}>Cancel</button>
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasinoBetPlace
