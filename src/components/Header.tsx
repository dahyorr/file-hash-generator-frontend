import AppBar  from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import ThemeToggle from '@/components/ThemeToggle'
import { useAppDispatch } from '@/hooks';
import {toggleSideBarNav} from '@/slices/triggersSlice'


const Header = () => {
    const dispatch = useAppDispatch()
    const theme = useTheme()
    console.log(theme)
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg') );
    const openSideBar = () => {
        dispatch(toggleSideBarNav())
    } 

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar 
        position="fixed" 
        color='secondary'
        sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundImage: 'unset'
        }} enableColorOnDark>
        <Toolbar>
            {!isLargeScreen && (<IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={openSideBar}
            >
                <MenuIcon />
            </IconButton>)}

            <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                    flexGrow: 1,
                    ml: 2
                    }}>
                DevUtils
            </Typography>

            <ThemeToggle/>
            
        </Toolbar>
        </AppBar>
    </Box>
    );
};

export default Header;
