import { combineReducers } from 'redux'
import authReducer from './slices/auth-slice'

export const rootReducer = combineReducers({
    auth: authReducer,
})

export const persistedReducers: string[] = ['auth']
