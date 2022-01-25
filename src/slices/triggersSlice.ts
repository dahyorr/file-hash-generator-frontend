import {createSlice} from '@reduxjs/toolkit'


const initialState  = {
    sideBarNav: {
        open: false
    } 
}

export const triggersSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleSideBarNav: state => {
            state.sideBarNav.open = !state.sideBarNav.open
        },
        closeSideBarNav: state => {
            state.sideBarNav.open = false
        },
        openSideBarNav: state => {
            state.sideBarNav.open = true
        }
    }
})

const {actions, reducer} = triggersSlice

export const {openSideBarNav, closeSideBarNav, toggleSideBarNav} = actions

export default reducer