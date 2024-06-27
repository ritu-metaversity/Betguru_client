import React, { useState, useEffect } from "react";
import ProfileDesktopView from "./ProfileDesktopViwe";
import "./Profile.scss";
import ProfileMobileView from "./ProfileMobileView";
import { Box, Modal, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ChangePassPopupWeb,
  CloseButton,
  Form,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PopupButton,
  PopupLabel,
  PopupTitle,
  StyledInput,
  ValidationText,
} from "./Styled";
import {
  useUpdateRateMutation,
  useUserCahngePasswordMutation,
  useUserProfileMutation,
} from "../../store/service/userServices/userServices";
import snackbarUtil from "../../utils/Snackbar";
import { useNavigate } from "react-router-dom";
import { listenToThemeChange } from "../../utils/themeEvent";

const Profile = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const isSmallScreen = useMediaQuery("(max-width:500px)");
  const [themeColor, setThemeColor] = useState(localStorage.getItem("app-theme") || "default-theme1");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  };

  const [rateValue, setRateValue] = useState<number>(0);
  const [changePass, setChangePass] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [passwordError, setPasswordError] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const nav = useNavigate();
  const [trigger, { data }] = useUserProfileMutation();
  const [updateRate, { data: updateRateInfo }] = useUpdateRateMutation();
  const [passwordChange, { data: passData }] = useUserCahngePasswordMutation();

  useEffect(() => {
    trigger();
  }, [trigger]);

  const handleUpadetRate = () => {
    updateRate({ rateDifference: rateValue });
  };

  useEffect(() => {
    if (updateRateInfo) {
      if (updateRateInfo?.status) {
        snackbarUtil.success(updateRateInfo?.message);
        trigger();
      } else {
        snackbarUtil.error(updateRateInfo?.message);
      }
    }
  }, [updateRateInfo]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChangePass((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(changePass, "changePasschangePasschangePass")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = true;
    const errors = {
      currentPassword: "",
      newPassword: "",
    };

    if (changePass.currentPassword.trim() === "") {
      errors.currentPassword = "Current Password is required.";
      valid = false;
    }

    if (changePass.newPassword.trim().length < 6) {
      errors.newPassword = "New Password should be at least 6 characters long.";
      valid = false;
    }

    setPasswordError(errors);

    if (valid) {
      passwordChange(changePass);
    }
  };


  useEffect(() => {
    listenToThemeChange(setThemeColor);
  }, []);


  useEffect(() => {
    if (passData) {
      if (passData?.status) {
        snackbarUtil.success(passData?.message);
        localStorage.clear();
        nav('/login');
      } else {
        snackbarUtil.error(passData?.message);
      }
    }
  }, [passData]);

  return (
    <>
      {matches ? (
        <ProfileMobileView
          handleOpen={handleOpen}
          userData={data?.data}
          rateValue={rateValue}
          setRateValue={setRateValue}
          handleUpadetRate={handleUpadetRate}
        />
      ) : (
        <ProfileDesktopView
          handleOpen={handleOpen}
          userData={data?.data}
          rateValue={rateValue}
          setRateValue={setRateValue}
          handleUpadetRate={handleUpadetRate}
        />
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
          <Form onSubmit={handleSubmit} noValidate>
            <ChangePassPopupWeb>
              <Box>
                <PopupLabel>Enter Current Password</PopupLabel>
                <StyledInput
                  type="password"
                  name="currentPassword"
                  value={changePass.currentPassword}
                  onChange={handleInputChange}
                />
                {passwordError.currentPassword && (
                  <ValidationText>{passwordError.currentPassword}</ValidationText>
                )}
              </Box>
              <Box>
                <PopupLabel>Enter New Password Min Length 6</PopupLabel>
                <StyledInput
                  type="password"
                  name="newPassword"
                  value={changePass.newPassword}
                  onChange={handleInputChange}
                />
                {passwordError.newPassword && (
                  <ValidationText>{passwordError.newPassword}</ValidationText>
                )}
              </Box>
            </ChangePassPopupWeb>
            <ModalFooter>
              <PopupButton type="submit" className={themeColor+1}>Change Password</PopupButton>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Profile;
