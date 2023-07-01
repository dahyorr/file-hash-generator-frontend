import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Collapse from '@mui/material/Collapse';
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks'
import { closeSideBarNav, toggleNavDropdown, openNavDropdown } from '@/slices/triggersSlice';
import { NavMainItemProps } from '@/types';
import NavChildItem from './NavChildItem';
import { useEffect } from 'react';

const NavMainItem: React.FC<NavMainItemProps> = ({ label, dropdown, icon, path, links, disabled, open }) => {
  const { pathname } = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (dropdown && path && pathname.includes(path)) {
      dispatch(openNavDropdown(label))
    }
  }, [dispatch, dropdown, label, path, pathname])

  const closeSidebar = () => {
    dispatch(closeSideBarNav())
  }

  const toggleDropdown = () => {
    dispatch(toggleNavDropdown(label))
  }

  if (disabled) return null
  return (
    <ListItem disablePadding sx={{
      px: 1.5,
      flexDirection: 'column',
      mb: 0.5
    }}>
      {dropdown
        ? (<>
          <ListItemButton
            component='button'
            disableRipple
            selected={path && pathname.includes(path) || false}
            onClick={toggleDropdown}

          >
            <ListItemIcon
              sx={{
                mr: 2,
                minWidth: 0,
                '& .MuiSvgIcon-root': {
                  fontSize: 20,
                  color: 'text.secondary'
                },
              }}
            >{icon}</ListItemIcon>
            <Typography sx={{
              lineHeight: 0,
              fontWeight: 500,
              fontSize: '0.875rem',
              flexGrow: 1
            }}>{label}</Typography>
            <ListItemIcon
              sx={{
                minWidth: 0
              }}
            >{open ? <KeyboardArrowDown /> : <KeyboardArrowRightIcon />}</ListItemIcon>

          </ListItemButton>

          <Collapse in={open} timeout={250} unmountOnExit sx={{ width: '100%' }}>
            <List>
              {links && links.map((item, index) => (
                <NavChildItem
                  key={index}
                  closeSidebar={closeSidebar}
                  {...item}
                />
              ))}
            </List>
          </Collapse>
        </>)

        : (
          <ListItemButton
            component={NextLink}
            href={path || '/'}
            onClick={() => {
              toggleDropdown();
              closeSidebar();
            }}
            disableRipple
            selected={pathname === path ? true : false}
          >
            <ListItemIcon
              sx={{
                mr: 2,
                minWidth: 0,
                '& .MuiSvgIcon-root': {
                  fontSize: 20,
                  color: 'text.secondary'
                },
              }}
            >
              {icon}
            </ListItemIcon>
            <Typography
              sx={{
                lineHeight: 0,
                fontWeight: 500,
                fontSize: '0.875rem'
              }}
            >
              {label}
            </Typography>
          </ListItemButton>
  )
}

    </ListItem >
  )
}

export default NavMainItem