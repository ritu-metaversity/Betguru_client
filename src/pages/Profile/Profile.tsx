import React, { useEffect } from "react"
import ProfileDesktopView from "./ProfileDesktopViwe"
import "./Profile.scss"
import ProfileMobileView from "./ProfileMobileView"
import {
  Box,
  Modal,
  useMediaQuery,
} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { ChangePassPopupWeb, CloseButton, Form, ModalBody, ModalFooter, ModalHeader, PopupButton, PopupLabel, PopupTitle, StyledInput, ValidationText } from "./Styled"
import { useUserProfileMutation } from "../../store/service/userServices/userServices"

const Profile = () => {
  const matches = useMediaQuery("(max-width:700px)")
  const isSmallScreen = useMediaQuery("(max-width:500px)")
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "80%" : "480px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }

  const [trigger, {data}] = useUserProfileMutation();

  useEffect(()=>{
    trigger();
  },[trigger])


  return (
    <>
      {matches ? (
        <ProfileMobileView handleOpen={handleOpen} userData={data?.data}/>
      ) : (
        <ProfileDesktopView handleOpen={handleOpen} userData={data?.data}/>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBody sx={modalStyle}>
        <ModalHeader>
            <PopupTitle id="exampleModalLabel">CHANGE PASSWORD</PopupTitle>
            <CloseButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
          <Form noValidate>
            <ChangePassPopupWeb>
              <Box>
                <PopupLabel>Enter Current Password</PopupLabel>
                <StyledInput type="password" />
                <ValidationText>Password is required.</ValidationText>
              </Box>
              <Box>
                <PopupLabel>Enter New Password Min Length 6</PopupLabel>
                <StyledInput type="password" />
                <ValidationText>
                  Password Should be min 6 length.
                </ValidationText>
              </Box>
            </ChangePassPopupWeb>
            <ModalFooter>
              <PopupButton type="submit">Change Password</PopupButton>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Profile
