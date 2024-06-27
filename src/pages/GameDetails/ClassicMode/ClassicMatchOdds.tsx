import type { FC } from "react";
import React from "react"
import type { Odd } from "../../../store/service/odds/odds"

interface Props {
  handleOpen: any
  data: Odd[] | undefined
}

const ClassicMatchOdds:FC<Props> = ({ handleOpen, data }) => {
  return (
    <>
      {data?.map(item => {
        return (
          <div className="mt-5 remove-margin-on-mobile">
            <table className="table" style={{ marginBottom: 0 }}>
              <thead>
                <tr>
                  <th>Team (max 100000)</th>
                  <th className="tc">lagai</th>
                  <th className="tc">khai</th>
                  <th className="tc">position</th>
                </tr>
              </thead>
              <tbody>
                {item?.runners.map(res => {
                  return (
                    <tr className="ng-star-inserted">
                      <td>{res?.name}</td>
                      {
                        res?.ex?.availableToBack?.map((items, id)=>{
                          if(id !==0 ) return null
                          return(
                            <td className="tc session_not" 
                            onClick={()=>handleOpen(false,
                              true,
                              items.price,
                              item?.Name,
                              res?.selectionId,
                              items?.size,
                              item?.marketId,
                              res?.name,
                              "Back",
                              new Date()
                            )
                            }> {items?.price} </td>
                          )
                        })
                      }
                      {
                        res?.ex?.availableToLay?.map((items, id)=>{
                          if(id !==0 ) return null
                          return(
                            <td className="tc session_yes" onClick={()=>handleOpen(false,
                              false,
                              items.price,
                              item?.Name,
                              res?.selectionId,
                              items?.size,
                              item?.marketId,
                              res?.name,
                              "Lay", new Date())}> {items?.price} </td>
                          )
                        })
                      }
                      
                      <td className="tc" style={{ color: "red" }}>
                        0
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </>
  )
}

export default ClassicMatchOdds
