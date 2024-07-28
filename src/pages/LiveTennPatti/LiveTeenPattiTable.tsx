import { useState, type FC } from "react"
import "./style.scss"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CasinoBetPlace from "./CasinoBetPlace";

const style = {
  position: 'absolute' as 'absolute',
  top: '18%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
};
interface Props {
  type: number
}

const LiveTeenPattiTable:FC<Props> = ({type}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="session-market ">
      <div className="form-row ">
        <div className="col-sm-12 ">
          <div className="table-header ">
            <div className="country-name box-6 ">
              <span className="max_min">Min: 100 | Max: 25000</span>
            </div>
            <div className="back box-4 text-center ">
              <b className="">BACK</b>
            </div>
          </div>
          <div className="table-body ">
            <div className="table-row ">
              <div className="country-name box-6 ">
                <span className="team-name ">{type === 1?"Player A":"Ander"}</span>
              </div>
              <div className="box-4 back text-center pointer suspended-casino  " onClick={handleOpen} style={{
                cursor:"pointer"
              }}>
                <span className="odd d-block ">1.95</span>
                <span
                  className="success "
                  style={{ color: "black", fontWeight: 700 }}
                >
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="table-body ">
            <div className="table-row ">
              <div className="country-name box-6 ">
                <span className="team-name ">{type === 1?"Player B":"Bahar"}</span>
              </div>
              <div className="box-4 back text-center pointer suspended-casino  " onClick={handleOpen} style={{
                cursor:"pointer"
              }}>
                <span className="odd d-block ">1.95</span>
                <span
                  className="success "
                  style={{ color: "black", fontWeight: 700 }}
                >
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="casino_betmodals">
        <CasinoBetPlace handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  )
}

export default LiveTeenPattiTable
