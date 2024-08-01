import { useState, type FC } from "react"
import "./style.scss"
import moment from "moment"
import { FaArrowRight } from "react-icons/fa"
import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Typography from "@mui/material/Typography"

interface Props {
  HeadingName: { name: string; roundId: string }
  id: string
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

const CasinoHeading: FC<Props> = ({ HeadingName, id }) => {
  const [open, setOpen] = useState(false)

  console.log(id, "idididididid")

  const handleClose = () => {
    setOpen(false)
  }

  const handleModals = () => {
    setOpen(true)
  }

  return (
    <div className="casino-heading ng-tns-c76-0">
      <span className="card-header-title ng-tns-c76-0">
        {HeadingName?.name}{" "}
        <span className="ml-10 pointer ng-tns-c76-0" onClick={handleModals} style={{
          cursor:"pointer"
        }}>
          <FaArrowRight /> RULES
        </span>
      </span>
      <span className="ng-tns-c76-0">Round ID: {HeadingName?.roundId}</span>
      <span className="single-tag ng-tns-c76-0">
        Time: {moment().format("HH:mm:ss A")}
      </span>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            background: "#2c3e50",
            color: "#fff",
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Bebas Neue",
            textTransform: "lowercase",
            padding: "10px",
            position: "relative",
          }}
          id="customized-dialog-title"
        >
          {HeadingName?.name} rules
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            p: 0,
            m: 0,
            "&.MuiDialogContent-root": {
              padding: "0px",
            },
          }}
        >
          <img src={`/img/${id}-rules.jpg`} alt="" width={"100%"} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  )
}

export default CasinoHeading
