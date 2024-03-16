import {
  useDispatch as useRDispatch,
  useSelector as useRSelector,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useDispatch: () => AppDispatch = useRDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useRSelector
