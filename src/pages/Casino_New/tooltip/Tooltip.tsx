import clsx from "clsx";
import type {  FC} from "react";
import { useState } from "react";
import "./style.scss";


interface Props{
  title:any,
  placement:any
}

const ToolTip:FC<Props> = ({ title, placement }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={"tooltip_container " + placement}>
        <i onClick={() => setOpen((o) => !o)} className="fas fa-info-circle " />
        <div className={clsx(open && "open", "tooltipBox")}>{title}</div>
      </div>
    </div>
  );
};

export default ToolTip;
