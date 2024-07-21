import { Box } from '@mui/material';
import { styled } from '@mui/system';

const HeaderContainer = styled(Box)({
  position: 'absolute',
  width: '140px',
  height: '40px',
  left: '38px',
  top: '32px',
  fontFamily: 'Bebas Neue',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '40px',
  lineHeight: '40px',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
});

const SidebarHeader: React.FC = () => {
  return (
    <HeaderContainer>
     {window.location.hostname.split('.')[0]}
    </HeaderContainer>
  );
};

export default SidebarHeader;
