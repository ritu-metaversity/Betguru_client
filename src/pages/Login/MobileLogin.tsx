import React from 'react';
import { LoginScreenContainer, LoginScreenWeb, MidImage, BetexchinContent, PlayerImageMobView, LoginBox, Padding, LoginTxt, FormControl, PasswordShow, LoginButton } from './StyledMobile';
import PlayerimageMobile from "../../Img/Playerimage-mobile.png";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, InputAdornment, TextField } from "@mui/material";

interface MobileLoginProps {
  formData: {
    userId: string;
    password: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginClick: (e: React.FormEvent) => void;
}

const MobileLogin: React.FC<MobileLoginProps> = ({ formData, onInputChange,onLoginClick }) => {
  return (
    <LoginScreenContainer>
      <LoginScreenWeb>
        <MidImage>
          <BetexchinContent variant="h1">BetGuru.net</BetexchinContent>
          <PlayerImageMobView src={PlayerimageMobile} alt="Player Image" />
        </MidImage>
      </LoginScreenWeb>
      <form onSubmit={onLoginClick}>
        <LoginBox>
          <Padding>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <LoginTxt variant="h6">LOGIN</LoginTxt>
            </Box>
            <Box mb={3}>
              <Box position="relative">
                <TextField
                  id="first"
                  label="User Name"
                  name="userId"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.userId}
                  onChange={onInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">C</InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box mb={2}>
              <Box position="relative">
                <TextField
                  id="pass"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.password}
                  onChange={onInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <PasswordShow><RemoveRedEyeIcon /></PasswordShow>
              </Box>
            </Box>
          </Padding>
          <LoginButton type="submit">Login</LoginButton>
        </LoginBox>
      </form>
    </LoginScreenContainer>
  );
}

export default MobileLogin;
