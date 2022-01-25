import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { navTree } from '@/utils'

const dropdowns = navTree.filter(item => item.dropdown)
                    .map(item => item.label)

const dropdownState: {[key: string]: boolean} = {}
dropdowns.reduce((obj, item) => {
    obj[item] = false
    return obj
}, dropdownState)

const initialState  = {
    sideBarNav: {
        open: false
    },
    navDropdownsOpen: dropdownState
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
        },

        toggleNavDropdown: (state, action: PayloadAction<string>) => {
            if(!state.navDropdownsOpen[action.payload]){
                Object.keys(state.navDropdownsOpen).forEach((item) =>{
                    state.navDropdownsOpen[item] = (item === action.payload)
                })
            }else{            
                state.navDropdownsOpen[action.payload] = false
            }
        },
        openNavDropdown: (state, action: PayloadAction<string>) => {
            Object.keys(state.navDropdownsOpen).forEach((item) =>{
                state.navDropdownsOpen[item] = (item === action.payload)
            })
        }
    }
})

const {actions, reducer} = triggersSlice

export const {
    openSideBarNav, 
    closeSideBarNav, 
    toggleSideBarNav, 
    toggleNavDropdown,
    openNavDropdown
} = actions

export default reducer