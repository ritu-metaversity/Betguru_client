import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AndroidLogo from '../../Img/Android-logo.png';
import Rectangle from '../../Img/Rectangle.png';

const Container = styled(Box)({
    backgroundImage: `url(${Rectangle})`,
    position: 'absolute',
    width: '139px',
    height: '32px',
    left: '37px',
    top: '76px',
    border: '1.5px solid #fff',
    boxSizing: 'border-box',
    borderRadius: '40px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding:7,
});

const ApkText = styled(Typography)({
    fontFamily: 'Lato !important',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '14px',
    color: '#fff',
    paddingLeft: '10px',
    opacity: 1,
});

const ApkContainer: React.FC = () => {
    return (
        <Container>
            <img src={AndroidLogo} alt="Android Logo" />
            <ApkText>Download APK</ApkText>
        </Container>
    );
};

export default ApkContainer;
