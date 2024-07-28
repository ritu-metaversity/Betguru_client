import { useEffect, useState } from "react";


const data =
{
  "success": true,
  "data": {
    "t1": [
      {
        "mid": "25.242807161016",
        "autotime": "0",
        "gtype": "dt20",
        "min": 5,
        "max": 20000,
        "C1": "3HH",
        "C2": "1"
      }
    ],
    "t2": [
      {
        "nat": "Dragon",
        "sid": "1",
        "rate": "2.00",
        "min": 100,
        "max": 300000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger",
        "sid": "2",
        "rate": "2.00",
        "min": 100,
        "max": 300000,
        "gstatus": "0"
      },
      {
        "nat": "Tie",
        "sid": "3",
        "rate": "50.00",
        "min": 100,
        "max": 300000,
        "gstatus": "0"
      },
      {
        "nat": "Pair",
        "sid": "4",
        "rate": "12.00",
        "min": 100,
        "max": 30000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Even",
        "sid": "5",
        "rate": "2.10",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Odd",
        "sid": "6",
        "rate": "1.79",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Red",
        "sid": "7",
        "rate": "1.95",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Black",
        "sid": "8",
        "rate": "1.95",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 1",
        "sid": "9",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 2",
        "sid": "10",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 3",
        "sid": "11",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 4",
        "sid": "12",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 5",
        "sid": "13",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 6",
        "sid": "14",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 7",
        "sid": "15",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 8",
        "sid": "16",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 9",
        "sid": "17",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card 10",
        "sid": "18",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card J",
        "sid": "19",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card Q",
        "sid": "20",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Dragon Card K",
        "sid": "21",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Even",
        "sid": "22",
        "rate": "2.10",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Odd",
        "sid": "23",
        "rate": "1.79",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Red",
        "sid": "24",
        "rate": "1.95",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Black",
        "sid": "25",
        "rate": "1.95",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 1",
        "sid": "26",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 2",
        "sid": "27",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 3",
        "sid": "28",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 4",
        "sid": "29",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 5",
        "sid": "30",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 6",
        "sid": "31",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 7",
        "sid": "32",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 8",
        "sid": "33",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 9",
        "sid": "34",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card 10",
        "sid": "35",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card J",
        "sid": "36",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card Q",
        "sid": "37",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      },
      {
        "nat": "Tiger Card K",
        "sid": "38",
        "rate": "12.00",
        "min": 100,
        "max": 25000,
        "gstatus": "0"
      }
    ]
  }
}
export const useOdds = (value: string) => {
  const [odds, setOdds] = useState<any | null>(null);
  const [pnl, setPnl] = useState<{ [x: string ]: number }>({});
  const [betPlace, setBetPlace] = useState(false);
  const token = localStorage.getItem("client-token"); 

  console.log(odds, "odds")

  useEffect(() => {
    const timer = setInterval(() => {
      if (Array.isArray(data?.data?.t2)) {
              if (Array.isArray(data?.data?.t3)) {
                data.data.t2 = [...data.data.t2, ...data.data.t3];
              }
              data.data.t2BySid = {};
              data?.data?.t2?.forEach((item: T2) => {
                if (!item.nation && item.nat) {
                  item.nation = item.nat;
                }
                item.gstatus =
                  Number(item.gstatus) === 1
                    ? true
                    : Number(item.gstatus) === 0
                    ? false
                    : item.gstatus;
                item.pnl = pnl[item.sid] || 0;
                data.data.t2BySid[item.sid] = item;
              });
            }
            console.log(data, "datadata")
            setOdds(data);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [pnl, value]);

  useEffect(()=>{
    return ()=>setOdds(null);
  }, [value])

  useEffect(() => {
    Number(odds?.data?.t1?.[0]?.mid) &&
      fetch(
          "http://13.250.53.81/VirtualCasinoBetPlacer/vc/liability/",
        {
          body: JSON.stringify({
            roundId: odds?.data.t1?.[0].mid,
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            const pnl: { [x: string]: number } = {};
            let i: { sid: string; liability: number };
            for (i of res.data) {
              pnl[i.sid] = i.liability;
            }
            setPnl(pnl);
          } else {
            setPnl({});
          }
        });
  }, [betPlace, odds?.data.t1?.[0].mid]);
  return { odds, setBetPlace };
};


// export const useOdds = (value: string) => {
//   const [odds, setOdds] = useState<OddsData | null>(null);
//   const [pnl, setPnl] = useState<{ [x: string ]: number }>({});
//   const [betPlace, setBetPlace] = useState(false);
//   const token = localStorage.getItem("client-token");  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       value &&
//         fetch("http://165.232.188.87:7070/casino/get-data/" + value)
//           .then((res) => res.json())
//           .then((res) => {
//             if (Array.isArray(res?.data?.data?.bf)) {
//               convertBfToT2(res.data);
//             }
//             if (Array.isArray(res?.data?.data?.t2)) {
//               if (Array.isArray(res?.data?.data?.t3)) {
//                 res.data.data.t2 = [...res.data.data.t2, ...res.data.data.t3];
//               }
//               res.data.data.t2BySid = {};
//               res?.data?.data?.t2?.forEach((item: T2) => {
//                 if (!item.nation && item.nat) {
//                   item.nation = item.nat;
//                 }
//                 item.gstatus =
//                   Number(item.gstatus) === 1
//                     ? true
//                     : Number(item.gstatus) === 0
//                     ? false
//                     : item.gstatus;
//                 item.pnl = pnl[item.sid] || 0;
//                 res.data.data.t2BySid[item.sid] = item;
//               });
//             }
//             setOdds(res?.data);
//           });
//     }, 2000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, [pnl, value]);

//   useEffect(()=>{
//     return ()=>setOdds(null);
//   }, [value])

//   useEffect(() => {
//     Number(odds?.data?.t1?.[0]?.mid) &&
//       fetch(
//           "http://13.250.53.81/VirtualCasinoBetPlacer/vc/liability/",
//         {
//           body: JSON.stringify({
//             roundId: odds?.data.t1?.[0].mid,
//           }),
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//         }
//       )
//         .then((res) => res.json())
//         .then((res) => {
//           if (res.data) {
//             const pnl: { [x: string]: number } = {};
//             let i: { sid: string; liability: number };
//             for (i of res.data) {
//               pnl[i.sid] = i.liability;
//             }
//             setPnl(pnl);
//           } else {
//             setPnl({});
//           }
//         });
//   }, [betPlace, odds?.data.t1?.[0].mid]);
//   return { odds, setBetPlace };
// };


const convertBfToT2 = (oddData: OddsData) => {
  if (oddData?.data?.bf && oddData?.data?.bf?.length > 0) {
    oddData.data.bf.forEach((bfElement, index) => {
      const t2Obj = {
        mid: bfElement.marketId,
        sid: bfElement.sectionId,
        max: +bfElement.max,
        min: +bfElement.min,
        gstatus: bfElement.gstatus,
        gtype: bfElement.gameType,
        nation: bfElement.nation,
        nat: bfElement.nation,
        rate: "",
        b1: `${bfElement.b1}`,
        l1: `${bfElement.l1}`,
        bs1: `${bfElement.bs1}`,
        ls1: `${bfElement.ls1}`,
      };
      const t1Obj: T1 = {
        mid: bfElement.marketId,
        autotime: bfElement.UpdateTime,
        gtype: bfElement.gameType,
        remark: bfElement.remark,
        max: +bfElement.max,
        min: +bfElement.min,
      };

      if (index === 0) {
        t1Obj.C1 = bfElement.C1;
        t1Obj.C3 = bfElement.C2;
        t1Obj.C5 = bfElement.C3;
      }
      if (index === 1) {
        t1Obj.C2 = bfElement.C1;
        t1Obj.C4 = bfElement.C2;
        t1Obj.C6 = bfElement.C3;
      }
      if (Array.isArray(oddData.data.t1)) {
        const newt1Obj = [{ ...oddData.data.t1?.[0], ...t1Obj }];
        oddData.data.t1 = newt1Obj;
      } else {
        oddData.data.t1 = [t1Obj];
      }

      if (Array.isArray(oddData.data.t2)) {
        oddData.data.t2.push(t2Obj);
      } else {
        oddData.data.t2 = [t2Obj];
      }
    });
  }
}