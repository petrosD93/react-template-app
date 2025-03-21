import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit'
import { persistedReducers, rootReducer } from './reducers'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: persistedReducers,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = reduxConfigureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'auth/setLoggedInUser'],
            },
        }),
})

export const persistor = persistStore(store)
