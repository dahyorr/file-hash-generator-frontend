import {useAppDispatch} from '@/hooks'
import {displayHeaderProgressBar, hideHeaderProgressBar} from '@/slices/loadersSlice'

export const useHeaderProgress = () => {
    const dispatch = useAppDispatch()

    const showProgress = () => {
        dispatch(displayHeaderProgressBar())
    }

    const hideProgress = () => {
        dispatch(hideHeaderProgressBar())
    }

    return [showProgress, hideProgress]
}