"use client";
import { useEffect,  } from 'react'
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from "@mui/material/styles";
import NavList from 'components/NavList'
import { useUi } from '@/hooks';

const drawerWidth = 270;


const SideBarNav = () => {
    const {sidebarOpen, openSideBar, closeSideBar} = useUi();
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    // useEffect(() => {
    //     if (isLargeScreen) {
    //         closeSideBar()
    //     }
    // }, [isLargeScreen, closeSideBar])

    if (isLargeScreen) {
        return (
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
                <NavList />
            </Drawer>
        )
    }

    else return (
        <SwipeableDrawer
            anchor={'left'}
            open={sidebarOpen}
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