import {useCallback, useEffect} from 'react'
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from "@mui/material/styles";
import { useAppSelector, useAppDispatch } from '@/hooks';
import {closeSideBarNav, openSideBarNav} from '@/slices/triggersSlice'
import NavList from '@/components/NavList'

const drawerWidth = 270;


const SideBarNav = () => {
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg') );
    const sideBarNavOpen = useAppSelector((state) => state.triggers.sideBarNav.open)

    const closeSideBar = useCallback(() =>{
        dispatch(closeSideBarNav())
    }, [dispatch])

    const openSideBar = useCallback(() =>{
        dispatch(openSideBarNav())
    }, [dispatch])

    useEffect(()=> {
        if(isLargeScreen){
            closeSideBar()
        }
    }, [isLargeScreen, closeSideBar])
    
    if(isLargeScreen){
        return(
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box' 
                },
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