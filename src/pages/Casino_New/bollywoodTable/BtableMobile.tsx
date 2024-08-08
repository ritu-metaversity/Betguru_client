import clsx from "clsx";

const BtableMobile = ({ t2, handleClick, t2BySid }: any) => {
  const abc = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="table-responsive aaa-odds">
      <table className="table1 table-bordered mb-0">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="box-10"
              style={{ fontSize: "14px", padding: "4px 2px" }}>
              Min: {t2[0]?.min} Max: {t2[0]?.max}
            </th>
          </tr>
        </thead>
        <tbody style={{
          position: "relative"
        }}>
          {t2?.map((item: any, id: number) => {
            if (item.gtype !== "btable") return <></>;
            return (
              <tr
                >
                <td className="box-6" style={{ fontSize: "12px" }}>
                  <b>{abc[id]}.</b>
                  <b>{item?.nation}</b>{" "}
                  <span className="mb-0">
                    <div className={item?.pnl >= 0 ? "text-success" : "text-danger"}>{item?.pnl}</div>
                  </span>
                </td>
                <td
                  className={clsx({
                    "aaa-table box-2 back text-center back": true,
                    clearfix: true,
                    suspended: item?.gstatus !== "ACTIVE",
                  })}
                  onClick={() =>
                    handleClick({ ...item, rate: item?.b1 || "" }, true, item?.gstatus)
                  }>
                  <span className="odds d-block" style={{ fontSize: "12px" }}>
                    <b>{item?.b1}</b>
                  </span>
                </td>{" "}
                <td
                  className={clsx({
                    "aaa-table box-2 lay text-center lay": true,
                    clearfix: true,
                    suspended: item?.gstatus !== "ACTIVE",
                  })}
                  onClick={() =>
                    handleClick({ ...item, rate: item?.l1 || "" }, false, item?.gstatus)
                  }>
                  <span className="odds d-block" style={{ fontSize: "12px" }}>
                    <b>{item?.l1}</b>
                  </span>
                </td>
              </tr>
            );
          })}
          <tr className="aaa-table box-2" style={{ height: "20px", border: "1px solid #aaa" }}></tr>
        </tbody>
      </table>

      <table className="table1 table-bordered mb-0">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="box-10"
              style={{ fontSize: "14px", padding: "4px 2px" }}>
              Min: {t2BySid["7"]?.min} Max: {t2BySid["7"]?.max}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            >
            <td className="box-6" style={{ fontSize: "12px", verticalAlign:"middle" }}>
              {/* <b>{abc[id]}.</b> */}
              <b>{t2BySid["7"]?.nation}</b>
              <span className="mb-0 text-bold">
                <span style={{fontWeight:"bold", paddingLeft:"2px", verticalAlign:"middle"}} className={t2BySid["7"]?.pnl>=0?"text-success":"text-danger"}>({t2BySid["7"]?.pnl})</span>
              </span>
            </td>
            <td
            className={clsx({
              "aaa-table box-2 back text-center back": true,
              clearfix: true,
              suspended: t2BySid["7"]?.gstatus !== "ACTIVE",
            })}
              onClick={() =>
                handleClick(
                  { ...t2BySid["7"], rate: t2BySid["7"]?.b1 || "" },
                  true,
                  t2BySid["7"]?.gstatus
                )
              }>
              <span className="odds d-block" style={{ fontSize: "12px" }}>
                <b>{t2BySid["7"]?.b1}</b>
              </span>
            </td>{" "}
            <td
            className={clsx({
              "aaa-table box-2 text-center lay": true,
              clearfix: true,
              suspended: t2BySid["7"]?.gstatus !== "ACTIVE",
            })}
              onClick={() =>
                handleClick(
                  { ...t2BySid["7"], rate: t2BySid["7"]?.l1 || "" },
                  false,
                  t2BySid["7"]?.gstatus
                )
              }>
              <span className="odds d-block" style={{ fontSize: "12px" }}>
                <b>{t2BySid["7"]?.l1}</b>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BtableMobile;
