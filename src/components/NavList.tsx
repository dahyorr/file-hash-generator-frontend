import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import List, {ListProps} from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
// import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import Public from '@mui/icons-material/Public';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Collapse from '@mui/material/Collapse';
import {Link, matchPath, matchRoutes, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { closeSideBarNav } from '@/slices/triggersSlice';

interface NavChildItemProps {
  label: string;
  path: string;
  disabled: boolean;
}

interface NavMainItemProps {
  label: string;
  dropdown: boolean;
  path?: string;
  icon: React.ReactNode;
  disabled?: boolean
  links?: NavChildItemProps[]
}

const navTree: NavMainItemProps[] = [
  {
    label: 'Home',
    dropdown: false,
    icon: <Home />,
    path: '/'
  },
  {
    label: 'Generators',
    dropdown: true,
    icon: <People />,
    path: '/generators',
    links: [
      {
        label: 'File Hash Generator',
        path: '/generators/file-hash-generator',
        disabled: false
      },
      {
        label: 'UUID Generator',
        path: '/generators/uuid-generator',
        disabled: true
      },
      {
        label: 'Lorem Ipsum',
        path: '/generators/lorem-ipsum',
        disabled: true
      },
    ]
  },
  {
    label: 'Converters',
    dropdown: true,
    icon: <Public />,
    path: '/converters',
    links: [
      {
        label: 'JSON - YAML',
        path: '/converters/json-yaml',
        disabled: false
      },
      {
        label: 'Number Base',
        path: '/converters/number-base',
        disabled: true
      },
    ]
  },
]

const NavChildItem: React.FC<NavChildItemProps> = ({label, path, disabled}) => {
  const {pathname} = useLocation()
  if(disabled) return null
  return (
    <ListItemButton 
    component={Link}
    to={path} 
    disableRipple
    selected={pathname === path ? true:false}
    >
      <Typography sx={{ml: '30px'}}>{label}</Typography>
    </ListItemButton>
  )
}

const StyledNavList = styled(List)<ListProps>(({theme}) => ({
  '& .MuiListItemButton-root, & .MuiButton-root': {
    padding: 10,
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 500,
    borderRadius: 6,
    color: theme.palette.secondary.main,
    width: '100%',
    fontSize: '14px',
    justifyContent: 'flex-start',
    // minWidth: 'fit-content',
    textTransform: 'none'
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    // color: theme.palette.primary.main,
    marginRight: 10,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
  '& .MuiTypography-root': {
    display: 'flex',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    flexGrow: 1,
  },
  '& .MuiIconButton-root': {
    padding: 0,
    mr: -1,
  }
}));

const NavList: React.FC = () => {

  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(closeSideBarNav())
  }

  const NavChildItem: React.FC<NavChildItemProps> = ({label, path, disabled}) => {
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

  const NavMainItem: React.FC<NavMainItemProps> = ({label, dropdown, icon, path, links, disabled}) => {
    const {pathname} = useLocation()
    // const availableMatch = matchRoutes(links?.map(link => link.path) || [], pathname)
    const [open, setOpen] = React.useState(false);
  
    if(disabled) return null
    return (
      <ListItem disablePadding  sx={{
        px: 1.5,
        flexDirection: 'column'
      }}>
        {dropdown
        ?(<>
          <Button 
            component='button' 
            endIcon={open ? <KeyboardArrowDown/>: <KeyboardArrowRightIcon/>}
            disableRipple
            onClick={() => setOpen(!open)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <Typography sx={{lineHeight: 0}}>{label}</Typography>
          </Button>
  
          <Collapse in={open} timeout={250} unmountOnExit sx={{width: '100%'}}>
            <List>
              {links && links.map((item, index) => (
                <NavChildItem key={index} {...item}/>
              )) }
            </List>
          </Collapse>
        </>)
        :(
          <ListItemButton 
            component={Link} 
            to={path || '/'}
            onClick={closeSidebar}
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
  
  return (
    <Box sx={{ display: 'flex'}}>
        <Paper elevation={0} sx={{ maxWidth: '100%',flexGrow: 1 }}>
          <StyledNavList disablePadding sx={{mt: 1}}>
            {navTree.map((item, index) => <NavMainItem key={index} {...item}/>)}
          </StyledNavList>
        </Paper>
    </Box>
  );
}

export default NavList