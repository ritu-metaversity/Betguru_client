import "./Place.scss"
import { Modal, Typography, Button, TextField, Grid, Box } from "@mui/material"
import crossBtn from "../../../Img/cross-bets.png"
import type { BetPlaceInterface } from "../type"
import { useBetPlacedMutation } from "../../../store/service/userServices/userServices"
import { useEffect, useState } from "react"
import snackbarUtil from "../../../utils/Snackbar"
import LoadingSpinner from "../../../component/LoadingSpinner/LoadingSpinner"
import { useParams } from "react-router-dom"

interface PlaceBetModalProps {
  open: boolean
  onClose: () => void
  placeBetData: BetPlaceInterface
  setPlaceBetData: React.Dispatch<React.SetStateAction<BetPlaceInterface>>
  setBetPlace: React.Dispatch<React.SetStateAction<boolean>>,
  getBetList:any,
  getOddsPnl:any
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}
const PlaceBetModal: React.FC<PlaceBetModalProps> = ({
  open,
  onClose,
  placeBetData,
  setPlaceBetData,
  setBetPlace,
  getBetList,
  getOddsPnl
}) => {
  const [timer, setTimer] = useState<number>(0)
  const { id } = useParams<{ id: string }>()
  const [trigger, { data: betplaceData, isLoading, error }] =
    useBetPlacedMutation()

  useEffect(() => {
    const timers = setTimeout(() => {
      if (timer > 0) {
        setTimer(o => o - 1)
      } else {
        onClose()
        setPlaceBetData({} as BetPlaceInterface)
      }
    }, 1000)
    return () => clearInterval(timers)
  }, [timer])

  useEffect(() => {
    if (placeBetData?.selectionId) {
      setTimer(7)
    }

    return () => {}
  }, [placeBetData?.selectionId])

  const handleChipClick = (amount: number) => {
    setPlaceBetData(prev => ({
      ...prev,
      stake: amount,
    }))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setPlaceBetData(prev => ({
      ...prev,
      stake: Number(value),
    }))
  }

  const handleBetPlaced = () => {
    trigger(placeBetData)
  }

  useEffect(() => {
    if (betplaceData) {
      if (betplaceData.status) {
        snackbarUtil.success(betplaceData?.message)
          if (id) {
            getBetList({ matchId: id })
            getOddsPnl({ matchId: id })
          }
        setPlaceBetData({} as BetPlaceInterface)
        setBetPlace(true)
        onClose()
      } else {
        snackbarUtil.error(betplaceData?.message)
        setPlaceBetData({} as BetPlaceInterface)
        onClose()
      }
    }
  }, [betplaceData])

  useEffect(() => {
    if (error) {
      onClose()
    }
  }, [error])

  return (
    <Modal
      className="main_bet_modals"
      open={open}
      onClose={onClose}
      aria-labelledby="place-bet-modal-title"
      aria-describedby="place-bet-modal-description"
    >
      <Box sx={style} className="modal-content">
        {isLoading && <LoadingSpinner />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h2" className="modal-header">
            Place Bet
          </Typography>
          <div
            style={{ marginLeft: "-4px", width: "10%" }}
            className="mobileHide"
            onClick={onClose}
          >
            <img src={crossBtn} alt="cross-btn" className="close" />
          </div>
          <div className="deskHide btn_can">
            <button onClick={onClose} className=" cancel_btn">
              Cencel
            </button>
          </div>
        </Box>

        <Grid container>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6" className="text-overflow">
                {placeBetData.marketName}
              </Typography>
              <Typography variant="h2" className="text-overflow">
                {placeBetData?.name}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Rate</Typography>
              <Typography variant="h2">{placeBetData?.odds}</Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Run</Typography>
              <Typography variant="h2">{placeBetData?.priceValue}</Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Mode</Typography>
              <Typography variant="h2">{placeBetData?.mode}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} className="mobileHide">
            <TextField
              type="number"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              className="amount"
              value={placeBetData?.stake}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  textAlign: "center",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} className="chip_section" sx={{ marginTop: 12 }}>
            {[
              100, 1000, 2000, 3000, 5000, 10000, 20000, 30000, 50000, 100000,
              2000000,
            ].map(amount => (
              <Button
                key={amount}
                variant="contained"
                className="chip"
                onClick={() => handleChipClick(amount)}
              >
                {amount}
              </Button>
            ))}
          </Grid>
          <Grid item xs={12} className="deskHide">
            <TextField
              type="number"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              className="amount"
              InputProps={{
                sx: {
                  textAlign: "center",
                },
              }}
              value={placeBetData?.stake}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="text-center done-btn">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="done-btn"
              onClick={handleBetPlaced}
            >
              DONE
            </Button>
            <Typography variant="h2" className="score_data">
              {timer}
            </Typography>
          </Grid>

          <Grid item xs={12} className="text-center done-btn">
            <Typography variant="h2" className="only-mobile">
              Cancel
            </Typography>
          </Grid>
          <Grid item xs={12} className="place-bet">
            <Typography variant="h1" onClick={handleBetPlaced}>
              Place Bet
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default PlaceBetModal
