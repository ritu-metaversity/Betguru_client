import { LoginScreenContainer, LoginBox, LoginMain, LoginTitle, AndroidDownload, InputField, LoginButton, CopyrightText } from './StyledDesk';
import AndroidLogo from '../../Img/Android-logo.png';
import { InputAdornment } from '@mui/material';

const DeskLogin = () => {
  return (
    <LoginScreenContainer>
      <LoginBox>
        <form noValidate>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
            <LoginMain>LOGIN</LoginMain>
            <AndroidDownload>
              <img src={AndroidLogo} alt="AndroidLogo" />
              <span>Download APK</span>
            </AndroidDownload>
          </div>
          <LoginTitle>USER NAME</LoginTitle>
          <InputField
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start">C</InputAdornment>,
            }}
            required
            sx={{
              marginTop: "0px",
              marginBottom: "28px"
            }}
          />
          <LoginTitle>PASSWORD</LoginTitle>
          <InputField
            fullWidth
            margin="normal"
            type="password"
            variant="outlined"
            required
            sx={{
              marginTop: "0px",
            }}
          />
          <LoginButton
            fullWidth
            variant="contained"
            type="submit"
          >
            Login
          </LoginButton>
        </form>
        
      </LoginBox>
      <CopyrightText variant="body2" align="center">
          All about for Online Game Zone © 2021 BetGuru.net
        </CopyrightText>
    </LoginScreenContainer>
  );
}

export default DeskLogin;
