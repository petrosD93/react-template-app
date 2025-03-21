import { createSlice } from '@reduxjs/toolkit'
import { StoreBlueprint } from '../interfaces/store'
import { AuthState } from '../interfaces/auth-state'

const initialState: AuthState = {
    loggedInUser: undefined,
    tokenData: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload
        },
    },
})

export const { setLoggedInUser } = authSlice.actions

const getAuthState = (state: StoreBlueprint): AuthState => state.auth

export const loggedInUser = (state: StoreBlueprint) => getAuthState(state).loggedInUser

export default authSlice.reducer
