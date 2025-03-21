import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { StoreBlueprint } from './interfaces/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<StoreBlueprint> = useSelector
