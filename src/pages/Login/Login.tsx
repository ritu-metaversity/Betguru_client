
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileLogin from './MobileLogin';
import DeskLogin from './DeskLogin';




const Login: React.FC = () => {
  const matches = useMediaQuery('(max-width:480px)');
  return (
    <>{matches ? <MobileLogin /> : <DeskLogin />}</>
   
  );
};

export default Login;
