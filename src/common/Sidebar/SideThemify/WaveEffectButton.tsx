import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';

const WaveEffectButton = styled(IconButton)({
  position: 'absolute',
  zIndex: 9,
  top: '50%',
  right: '100%',
  backgroundColor: '#262537',
  height: '40px',
  width: '40px',
  borderRadius: '5px 0 0 5px',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#1f1e2d',
  },
});

const SpinningIcon = styled(SettingsIcon)({
  color: '#fff',
  fontSize: '24px',
  animation: 'fa-spin 2s linear infinite',
  '@keyframes fa-spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

export { WaveEffectButton, SpinningIcon };
