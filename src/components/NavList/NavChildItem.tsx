
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import {Link, matchPath, matchRoutes, useLocation} from 'react-router-dom'
import {NavChildItemProps } from '@/types';

const NavChildItem: React.FC<NavChildItemProps> = ({label, path, disabled, closeSidebar}) => {
  const {pathname} = useLocation()
  if(disabled) return null
  return (
    <ListItemButton 
    component={Link}
    to={path} 
    disableRipple
    selected={pathname === path ? true:false}
    onClick={closeSidebar}
    >
      <Typography sx={{ml: '30px'}}>{label}</Typography>
    </ListItemButton>
  )
}

export default NavChildItem