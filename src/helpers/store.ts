import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/slices/themeSlice'
import triggersReducer from '@/slices/triggersSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        triggers: triggersReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch