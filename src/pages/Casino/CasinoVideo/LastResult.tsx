import { Link, useParams } from "react-router-dom"
import "./style.scss"
import { useCasinoResultQuery } from "../../../store/service/casino/casinoServices"
import { LetterAndColorById } from "../../Casino_New/Constant/Constant"
import type { ReactElement, Ref } from "react"
import { forwardRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from "@mui/material"
import type { TransitionProps } from "@mui/material/transitions"
import CloseIcon from "@mui/icons-material/Close"
import ResultModalContainer from "../../Casino_New/LastResult/ResultModalContainer"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />
})

const LastResult = ({ casinoName, matchId }: any) => {
  const [first, setFirst] = useState("")
  const { id } = useParams()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { data: resultList } = useCasinoResultQuery(casinoName, {
    refetchOnMountOrArgChange: true,
    pollingInterval:5000
  })

  return (
    <div className="results-container ">
      {/* <ResultModalContainer tableId ={id} mid={first}/> */}
      <div className="casino-title mt-1 ">
        {" "}
        Last Result{" "}
        <Link
          to="#"
          className="m-r-5 game-rules-icon "
          onClick={handleClickOpen}
        >
          <span className="">View All</span>
        </Link>
      </div>
      <div className="">
        <div
          className="ball-by-ball"
          style={{
            textAlign: "right",
            marginTop: "5px",
          }}
        >
          {resultList?.map((item, index) => {
            return (
              <span
                key={index}
                style={{
                  background: LetterAndColorById[id]?.[item.result]?.color,
                }}
                onClick={() => setFirst(item.mid)}
                className="cards-done"
              >
                {LetterAndColorById[id]?.[item.result]?.label}
              </span>
            )
          })}
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "28px",
              color: "#000",
            }}
          >
            Result
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="dialog-content-casino">
          <DialogContentText id="alert-dialog-slide-description">
            <div className="tableDiv header">
              <table className="table table-striped">
                <thead>
                  <tr style={{ background: "transparent" }}>
                    <th>Round ID</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    resultList?.map((items)=>{
                      return(
                        <tr>
                        <td className="text-left" style={{ width: 200 }}>
                        {items?.mid}
                        </td>
                        <td>Player {LetterAndColorById[id]?.[items.result]?.label}</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LastResult
