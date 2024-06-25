import styled from "styled-components";
import { Typography, Box, TextField, Button, Container } from "@mui/material";
import Rectangle from "../../Img/Half-cut-rectangle.png";


export const LoginScreenContainer = styled("div")({
  height: "100vh",
  overflowX:"hidden",
});

export const LoginScreenWeb = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  overflowX: "hidden",
});

export const MidImage = styled("div")({
  height: "calc(100vh - 220px) !important",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
});

export const BetexchinContent = styled(Typography)({
  margin: 0,
  textTransform: "uppercase",
  color: "#fff",
  position: "absolute",
  fontFamily: "Bebas Neue !important",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "24px !important",
  "@media only screen and (max-width: 480px)": {
    display: "block",
    bottom: 110,
    right: 8,
    letterSpacing: "0px !important",
  },
});

export const PlayerImageMobView = styled("img")({
  display: "none",
  maxWidth: "100%",
  objectFit: "cover",
  objectPosition: "center",
  "@media only screen and (max-width: 480px)": {
    display: "block",
    width: "100%",
    height: "100%",
  },
});

export const LoginBox = styled(Container)({
  display: "none",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: 0,
  color: "#fff",
  "@media only screen and (max-width: 600px)": {
    display: "block",
  },
  "&::after": {
    content: '""',
    background: `url(${Rectangle}) no-repeat`,
    position: "absolute",
    bottom: "56px",
    left: 0,
    height: "260px",
    width: "100%",
    backgroundPosition: "inherit",
    backgroundSize: "cover",
  },
});

export const Padding = styled(Box)({
  padding: "15px 35px 0",
  zIndex: 2,
  position: "absolute",
  bottom: "73px",
  left: 0,
  right: 0,
});

export const LoginTxt = styled(Typography)({
  color: "#fff",
  fontFamily: "Bebas Neue !important",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "25px !important",
  lineHeight: "28px",
  marginBottom: "20px !important",
  "@media only screen and (max-width: 375px)": {
    fontSize: 25,
    marginBottom: 25,
  },
});

export const FormControl = styled(TextField)({
  borderRadius: 3,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "24px",
  border: "1px solid #fff",
  width: "100%",
  color: "#fff",
  "& .MuiFormLabel-root": {
    color: "#fff !important",
  },
  "& .Mui-root": {
    color: "#fff",
  },
  "& .MuiInputAdornment-root": {
    position: "absolute",
    left: 5,
    top: 16,
    padding: "0 10px",
    height: "unset !important",
  },
  "& .MuiInputBase-root": {
    borderRadius: "4px",
    paddingLeft: "unset",
  },
  "& .MuiTypography-root": {
    fontWeight: 600,
    fontSize: 16,
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #fff !important",
  },
  "& input": {
    paddingLeft: "35px !important",
    background: "#4997d9",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "66px",
    color: "#fff",
  },
});

export const PasswordShow = styled("span")({
  position: "absolute",
  right: 15,
  top: 15,
  cursor: "pointer",
  "@media only screen and (max-width: 375px)": {
    right: 13,
    top: 13,
  },
  "@media only screen and (max-width: 320px)": {
    right: 10,
    top: 10,
  },
});

export const LoginButton = styled(Button)({
  fontFamily: "Mukta",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 16,
  lineHeight: 16,
  textAlign: "center",
  letterSpacing: "1.25px",
  color: "#2d82cf",
  textTransform: "uppercase",
  background: "#fff",
  width: "100%",
  borderRadius: 0,
  height: 55,
  marginTop: 0,
});

export const ProfileBox = styled(Container)({
  display: "none",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: 0,
  color: "#fff",
  "@media only screen and (max-width: 600px)": {
    display: "block",
  },
  
});
