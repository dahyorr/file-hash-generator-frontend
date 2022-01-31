import {useAppDispatch} from '@/hooks'
import {displayMainSpinner, hideMainSpinner} from '@/slices/loadersSlice'

export const useMainSpinner = () => {
    const dispatch = useAppDispatch()

    const showSpinner = () => {
        dispatch(displayMainSpinner())
    }

    const hideSpinner = () => {
        dispatch(hideMainSpinner())
    }

    return [showSpinner, hideSpinner]
}