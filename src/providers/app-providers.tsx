import { AuthProvider } from './auth-provider/auth-provider.tsx'
import { ThemeProvider } from './theme-provider/theme-provider.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '../store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from '../common/utils/route-utils.tsx'

export interface AppProvidersProps {}

export const AppProviders = () => {
    const router = createBrowserRouter(routes)

    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <AuthProvider>
                        <RouterProvider router={router} />
                    </AuthProvider>
                </ThemeProvider>
            </PersistGate>
        </ReduxProvider>
    )
}
