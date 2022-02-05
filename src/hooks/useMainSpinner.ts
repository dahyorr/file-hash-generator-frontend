import {useAppDispatch} from '@/hooks'
import {displayMainSpinner, hideMainSpinner} from '@/slices/loadersSlice'
import { useCallback } from 'react'

export const useMainSpinner = () => {
    const dispatch = useAppDispatch()

    const showSpinner = useCallback(() => {
        dispatch(displayMainSpinner())
    }, [dispatch])

    const hideSpinner = useCallback(() => {
        dispatch(hideMainSpinner())
    }, [dispatch])

    return [showSpinner, hideSpinner]
}