import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface SidebarContainerProps {
  rightPos: boolean;
}

const SidebarContainer = styled(Box)<SidebarContainerProps>(({ theme, rightPos }) => ({
  position: 'fixed',
  top: '50%',
  right: rightPos ? '-200px' : '0',
  width: '175px',
  backgroundColor: '#fff',
  transition: 'all .5s ease-in-out',
  borderRadius: '10px 0 0 10px',
  zIndex: 9999,
  transform: 'translateY(-50%)',
  padding: '13px 11px 11px 15px',
  boxShadow: '0 6px 16px rgba(0,0,0,.44)',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export default SidebarContainer;
