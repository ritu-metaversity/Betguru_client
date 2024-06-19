import React from 'react';
import { LoginScreenContainer, LoginScreenWeb, MidImage, BetexchinContent, PlayerImageMobView, LoginBox, Padding, LoginTxt, FormControl, PasswordShow, LoginButton } from './StyledMobile';
import PlayerimageMobile from "../../Img/Playerimage-mobile.png";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Typography, Box, TextField, Container, InputAdornment, Button } from "@mui/material";

const MobileLogin = () => {
  return (
    <LoginScreenContainer>
      <LoginScreenWeb>
        <MidImage>
          <BetexchinContent variant="h1">BetGuru.net</BetexchinContent>
          <PlayerImageMobView src={PlayerimageMobile} alt="Player Image" />
        </MidImage>
      </LoginScreenWeb>
      <form>
        <LoginBox>
          <Padding>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <LoginTxt variant="h6">LOGIN</LoginTxt>
            </Box>
            <Box mb={3}>
              <Box position="relative">
                <FormControl
                  id="first"
                  label="User Name"
                  variant="outlined"
                  required
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
                <FormControl
                  id="pass"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <PasswordShow> <RemoveRedEyeIcon /> </PasswordShow>
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
