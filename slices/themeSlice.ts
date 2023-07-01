import { createSlice } from '@reduxjs/toolkit'
import { detectTheme } from '@/utils'

const initialState = ({
    mode: typeof window !== 'undefined' && localStorage.getItem('themeMode') || detectTheme()
})

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: state => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

const { actions, reducer } = themeSlice

export const { toggleThemeMode } = actions

export default reducer