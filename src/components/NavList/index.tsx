import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import List, {ListProps} from '@mui/material/List';
import Paper from '@mui/material/Paper';
import {Link, matchPath, matchRoutes, useLocation} from 'react-router-dom'
import {useAppSelector} from '@/hooks'
import {navTree} from '@/utils'
import NavMainItem from './NavMainItem';

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
    textTransform: 'none',
    '&:hover':{
      background: 'rgba(80,70,228,0.04)',
    },
    '&.Mui-selected': {
      background: 'transparent',
      color: theme.palette.primary.main,
      '&:hover':{
        background: 'rgba(80,70,228,0.04)',
      },
      '& .MuiListItemIcon-root': {
        color: theme.palette.primary.main,
      }
    }
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
  const dropdownStates = useAppSelector(state => state.triggers.navDropdownsOpen)
  
  return (
    <Box sx={{ display: 'flex'}}>
        <Paper elevation={0} sx={{ maxWidth: '100%',flexGrow: 1 }}>
          <StyledNavList disablePadding sx={{mt: 1}}>
          {navTree.map((item, index) => (
            <NavMainItem 
              key={index}
              open={dropdownStates[item.label]}
              {...item}
            />
            ))}
          </StyledNavList>
        </Paper>
    </Box>
  );
}

export default NavList