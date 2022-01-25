import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Collapse from '@mui/material/Collapse';
import {Link, useLocation} from 'react-router-dom'
import {useAppDispatch} from '@/hooks'
import { closeSideBarNav, toggleNavDropdown, openNavDropdown } from '@/slices/triggersSlice';
import { NavMainItemProps } from '@/types';
import NavChildItem from './NavChildItem';
import { useEffect } from 'react';

const NavMainItem: React.FC<NavMainItemProps> = ({label, dropdown, icon, path, links, disabled, open}) => {
  const {pathname} = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(dropdown && path && pathname.includes(path)){
      dispatch(openNavDropdown(label))
    }
  },[])

  const closeSidebar = () => {
    dispatch(closeSideBarNav())
  }

  const toggleDropdown = () => {
    dispatch(toggleNavDropdown(label))
  }

  if(disabled) return null
  return (
    <ListItem disablePadding  sx={{
      px: 1.5,
      flexDirection: 'column',
      mb: 0.5
    }}>
      {dropdown
      ?(<>
        <ListItemButton 
          component='button' 
          disableRipple
          selected={path && pathname.includes(path) || false}
          onClick={toggleDropdown}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <Typography sx={{lineHeight: 0}}>{label}</Typography>
          <ListItemIcon>{open ? <KeyboardArrowDown/>: <KeyboardArrowRightIcon/>}</ListItemIcon>

        </ListItemButton>

        <Collapse in={open} timeout={250} unmountOnExit sx={{width: '100%'}}>
          <List>
            {links && links.map((item, index) => (
              <NavChildItem 
              key={index} 
              closeSidebar={closeSidebar}
              {...item}
              />
            )) }
          </List>
        </Collapse>
      </>)
      
      :(
        <ListItemButton 
          component={Link} 
          to={path || '/'}
          onClick={() => {
            toggleDropdown();
            closeSidebar();
          }}
          disableRipple
          selected={pathname === path ? true:false}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <Typography sx={{lineHeight: 0}}>{label}</Typography>
        </ListItemButton>
      )
      }
      
    </ListItem>
  )
}

export default NavMainItem