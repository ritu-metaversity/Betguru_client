import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CopyrightContainer = styled(Box)({
  position: 'absolute',
  left: '85px',
  bottom: '10px',
  fontFamily: 'Lato !important',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '14px',
  color: '#fff',
  opacity: 0.6,
});

const CopyrightContent: React.FC = () => {
  return (
    <CopyrightContainer>
      © 2024 BetGuru.net
    </CopyrightContainer>
  );
};

export default CopyrightContent;
