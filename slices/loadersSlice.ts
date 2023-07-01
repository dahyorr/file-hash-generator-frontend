import {createSlice} from '@reduxjs/toolkit'

const initialState  = {
    headerProgressBar: false,
    mainSpinner: false
}

export const triggersSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        displayHeaderProgressBar: state => {
            state.headerProgressBar = true
        },
        hideHeaderProgressBar: state => {
            state.headerProgressBar = false
        },
        displayMainSpinner: state => {
            state.mainSpinner = true
        },
        hideMainSpinner: state => {
            state.mainSpinner = false
        },
    }
})

const {actions, reducer} = triggersSlice

export const {
    hideHeaderProgressBar,
    hideMainSpinner,
    displayHeaderProgressBar,
    displayMainSpinner
} = actions

export default reducer