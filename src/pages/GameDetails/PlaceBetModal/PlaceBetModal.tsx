import "./Place.scss"
import { Modal, Typography, Button, TextField, Grid, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import crossBtn from "../../../Img/cross-bets.png"

interface PlaceBetModalProps {
  open: boolean
  onClose: () => void
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const PlaceBetModal: React.FC<PlaceBetModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      className="main_bet_modals"
      open={open}
      onClose={onClose}
      aria-labelledby="place-bet-modal-title"
      aria-describedby="place-bet-modal-description"
    >
      <Box sx={style} className="modal-content">
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
          <div style={{marginLeft:"-4px", width:"10%"}} className="mobileHide" onClick={onClose}>
            <img src={crossBtn} alt="cross-btn" className="close" />
          </div>
          <div className="deskHide btn_can">

          <button onClick={onClose} className=" cancel_btn">Cencel</button>
          </div>
        </Box>

        <Grid container>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6" className="text-overflow">
                Session
              </Typography>
              <Typography variant="h2" className="text-overflow">
                SA WILL WIN THE TOSS(SA VS AFG)ADV
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Rate</Typography>
              <Typography variant="h2">1.1</Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Run</Typography>
              <Typography variant="h2">1</Typography>
            </div>
          </Grid>
          <Grid item xs={3} className="rnner-bet-inn">
            <div className="rnner-bet-inn">
              <Typography variant="h6">Mode</Typography>
              <Typography variant="h2">NO</Typography>
            </div>
          </Grid>
          <Grid item xs={12} className="mobileHide">
            <TextField
              type="number"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              className="amount"
            />
          </Grid>
          <Grid item xs={12} className="chip_section">
            <div>
              <Button variant="contained" className="chip">
                500
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                1000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                2000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                3000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                5000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                10000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                20000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                30000
              </Button>
            </div>
            <div>
              <Button variant="contained" className="chip">
                50000
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}  className="deskHide">
            <TextField
              type="number"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              className="amount"
              sx={{
                textAlign:"center"
              }}
            />
          </Grid>
          <Grid item xs={12} className="text-center done-btn">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="done-btn"
            >
              DONE
            </Button>
              <Typography variant="h2" className="score_data">
                0
              </Typography>
          </Grid>

          <Grid item xs={12} className="text-center done-btn">
            <Typography variant="h2" className="only-mobile">
              Cancel
            </Typography>
          </Grid>
          <Grid item xs={12} className="place-bet">
            <Typography variant="h1">Place Bet</Typography>
            {/* <Typography variant="h6">Bet is in</Typography> */}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default PlaceBetModal
