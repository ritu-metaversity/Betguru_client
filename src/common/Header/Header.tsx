import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled('div')({
  background: '#090909', 
  padding: '8px 16px', 
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color:"#fff"
});

const MarqueeContent = styled(Typography)({
  display: 'inline-block',
  fontSize:"1rem",
  animation: `${marquee} 15s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const Header = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent variant="h6">
        प्रिय ग्राहक एडवांस सेशन और टॉस का रेट चालू है धन्यवाद
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Header;
