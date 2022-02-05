import {useAppDispatch} from '@/hooks'
import {displayHeaderProgressBar, hideHeaderProgressBar} from '@/slices/loadersSlice'
import { useCallback } from 'react'

export const useHeaderProgress = () => {
    const dispatch = useAppDispatch()

    const showProgress = useCallback(() => {
        dispatch(displayHeaderProgressBar())
    }, [dispatch])

    const hideProgress = useCallback(() => {
        dispatch(hideHeaderProgressBar())
    }, [dispatch])

    return [showProgress, hideProgress]
}