import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@/helpers/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector