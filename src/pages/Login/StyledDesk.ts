import { styled } from '@mui/system';
import { Typography, Box, TextField, Button, Container } from '@mui/material';
import loginBanner from '../../Img/login-banner.png';
import AndroidLogo from '../../Img/Android-logo.png';

export const LoginScreenContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: `url(${loginBanner}) no-repeat 50% fixed`,
    backgroundSize: 'cover',
    position: 'relative',
});

export const LoginBox = styled(Container)({
    position: 'absolute',
    width: 430,
    background: '#fff',
    boxShadow: `0 100px 80px rgba(0, 0, 0, 0.12), 
              0 41.7776px 33.4221px rgba(0, 0, 0, 0.09), 
              0 22.3363px 17.869px rgba(0, 0, 0, 0.07), 
              0 12.5216px 10.0172px rgba(0, 0, 0, 0.06), 
              0 6.6501px 5.32008px rgba(0, 0, 0, 0.05), 
              0 2.76726px 2.21381px rgba(0, 0, 0, 0.03)`,
    borderRadius: 8,
    padding: "35px !important",
    right: 50,
    zIndex: 1,
});

export const LoginTitle = styled(Typography)({
    color: "#373647",
    fontFamily: "Bebas Neue",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "16px",
    opacity: .5,
    marginBottom: "5px"
});

export const LoginMain = styled(Typography)({
    color: "#000",
    fontFamily: "Bebas Neue",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "28px",
});

export const AndroidDownload = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 139,
    height: 32,
    border: '1.5px solid rgba(41, 41, 41, 0.5)',
    borderRadius: 40,
    cursor: 'pointer',
    fontFamily: 'Lato !important',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '14px',
});

export const ValidationText = styled(Typography)({
    color: '#dc3545',
    fontSize: 13,
    fontWeight: 600,
    marginTop: '8px',
});

export const InputField = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: "6px",
        paddingLeft: "unset"
    },
    '& .MuiInputAdornment-root': {
        position: 'absolute',
        left: 5,
        top: 12,
        padding: '0 10px',
        height: "unset !important"
    },
    '& .MuiTypography-root': {
        fontWeight: 600,
        fontSize: 16,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: "unset"
    },
    '& input': {
        paddingLeft: '35px !important',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '66px !important',
        height: "1rem !important",
        backgroundColor: "#f3f3f3 !important",
        borderRadius: "6px",
    },
});

export const LoginButton = styled(Button)({
    height: 48,
    background: '#2560ad',
    borderRadius: 8,
    fontFamily: 'Lato !important',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: '18px',
    color: '#fff',
    marginTop: 28,
    textAlign: 'center',
});

export const CopyrightText = styled(Typography)({
    position: 'absolute',
    bottom: 10,
    right: 120,
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Mukta ',
});
