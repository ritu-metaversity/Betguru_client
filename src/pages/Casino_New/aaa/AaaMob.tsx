
import clsx from "clsx";

interface Item {
  min: number;
  max: number;
  gtype: string;
  gstatus: string;
  nation: string;
  b1: string;
  l1: string;
}

interface AaaMobProps {
  t2: Item[];
  abc: string[];
}

const AaaMob: React.FC<AaaMobProps> = ({ t2, abc }) => {
  return (
    <div className="table-responsive aaa-odds">
      <table className="table1 table-bordered mb-0">
        <thead>
          <tr>
            <th    style={{ fontSize: "14px", padding: "4px 2px",width:"60%" }}>
              Min: {t2[0]?.min} Max: {t2[0]?.max}
            </th>
            <th   style={{ fontSize: "14px", padding: "4px 2px", width:"20%", textAlign:"center" }}>
             Back
            </th>
            <th   style={{ fontSize: "14px", padding: "4px 2px", width:"20%", textAlign:"center"  }}>
             Lay
            </th>
          </tr>
        </thead>
        <tbody>
          {t2?.map((item, id) => {
            if (item?.gtype !== "aaa") return <></>;
            return (
              <tr
                key={id}
                className={clsx({
                  "aaa-table": true,
                  clearfix: true,
                  suspended: item?.gstatus !== "ACTIVE",
                })}
              >
                <td className="box-6" style={{ fontSize: "12px", width:"60%" }}>
                  <b>{abc[id]}.</b>
                  <b>{item?.nation}</b>{" "}
                  <p className="mb-0">
                    <b style={{ color: "black" }} />
                  </p>
                </td>
                <td className="box-2 back text-center back">
                  <span className="odds d-block" style={{ fontSize: "12px" }}>
                    <b>{item?.b1}</b>
                  </span>
                </td>
                <td className="box-2 lay text-center lay">
                  <span className="odds d-block" style={{ fontSize: "12px" }}>
                    <b>{item?.l1}</b>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AaaMob;