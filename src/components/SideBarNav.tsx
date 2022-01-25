import {useEffect} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { useTheme } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAppSelector, useAppDispatch } from '@/hooks';
import {closeSideBarNav, openSideBarNav} from '@/slices/triggersSlice'
import NavList from '@/components/NavList'

const drawerWidth = 270;


const SideBarNav = () => {
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg') );
    const sideBarNavOpen = useAppSelector((state) => state.triggers.sideBarNav.open)

    const closeSideBar = () =>{
        dispatch(closeSideBarNav())
    }

    const openSideBar = () =>{
        dispatch(openSideBarNav())
    }

    useEffect(()=> {
        if(isLargeScreen){
            closeSideBar()
        }
    }, [isLargeScreen])


    // const drawerContent = (
    //     <Box sx={{ overflow: 'auto' }}>
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //             <ListItem button key={text}>
    //                 <ListItemIcon>
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                 </ListItemIcon>
    //                 <ListItemText primary={text} />
    //             </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //             <ListItem button key={text}>
    //                 <ListItemIcon>
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //                 </ListItemIcon>
    //                 <ListItemText primary={text} />
    //             </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // )
    
    if(isLargeScreen){
        return(
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <NavList/>
        </Drawer>
        )
    }

    else return(
        <SwipeableDrawer
        anchor={'left'}
        open={sideBarNavOpen}
        onClose={closeSideBar}
        onOpen={openSideBar}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { 
                width: drawerWidth, 
                boxSizing: 'border-box',
                backgroundImage: 'unset',
            },
        }}
        >
            <Toolbar />
            <NavList />
        </SwipeableDrawer>
    )
}

export default SideBarNav