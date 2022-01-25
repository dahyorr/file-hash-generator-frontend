import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/helpers/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
