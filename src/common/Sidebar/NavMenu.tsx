import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import CricketIcon from '../../Img/SquaresFour.png';
import CasinoIcon from '../../Img/c-chip.png';
import LedgerIcon from '../../Img/ledger.png';
import ProfileIcon from '../../Img/profile.png';
import LogoutIcon from '../../Img/SignOut.png';
import { cricket, casino, ledger, profile } from '../../routes/Links';
import { useNavigate } from 'react-router-dom';

const MenuContainer = styled(List)({
    padding: "20px 0 0",
    position: 'absolute',
    top: '125px',
    // left: '30px',
    backgroundColor: 'transparent',
    width: '100%',
    borderTop:"1px solid hsla(0,0%,100%,.5490196078431373)"
  });
  
  const NavItem = styled(ListItem)({
    cursor: 'pointer',
    padding: '6px',
    paddingLeft:"30px",
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      background: 'linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
      width: '100%',
      height: '100%',
      opacity: 0.2,
      display: 'none',
    },
    '&.active:after, &:hover:after': {
      display: 'block',
    },
  });
  
  const NavItemLink = styled(ListItemText)({
    
    color: '#fff',
    paddingLeft: '10px',
    '& .MuiTypography-root':{
        fontFamily: 'Bebas Neue !important',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '19px',
        lineHeight: '28px',
    }
  });

const NavMenu: React.FC = () => {
  const navigator = useNavigate();
  return (
    <MenuContainer>
      <NavItem onClick={()=>navigator(cricket)}>
        <ListItemIcon sx={{minWidth:"25px"}}>
          <img src={CricketIcon} alt="Cricket" />
        </ListItemIcon>
        <NavItemLink primary="Cricket" />
      </NavItem>
      <NavItem onClick={()=>navigator(casino)}>
        <ListItemIcon sx={{minWidth:"25px"}}>
          <img src={CasinoIcon} alt="Casino" />
        </ListItemIcon>
        <NavItemLink primary="Casino" />
      </NavItem>
      <NavItem onClick={()=>navigator(ledger)}>
        <ListItemIcon sx={{minWidth:"25px"}}>
          <img src={LedgerIcon} alt="My Ledger" />
        </ListItemIcon>
        <NavItemLink primary="My Ledger" />
      </NavItem>
      <NavItem onClick={()=>navigator(profile)}>
        <ListItemIcon sx={{minWidth:"25px"}}>
          <img src={ProfileIcon} alt="My Profile" />
        </ListItemIcon>
        <NavItemLink primary="My Profile" />
      </NavItem>
      <NavItem>
        <ListItemIcon sx={{minWidth:"25px"}}>
          <img src={LogoutIcon} alt="Logout" />
        </ListItemIcon>
        <NavItemLink primary="Logout" />
      </NavItem>
    </MenuContainer>
  );
};

export default NavMenu;
