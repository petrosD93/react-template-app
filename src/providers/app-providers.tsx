import { AuthProvider } from './auth-provider/auth-provider.tsx'
import { ThemeProvider } from './theme-provider/theme-provider.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '../store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Restricted } from '../common/components/restricted/restricted.tsx'

export interface AppProvidersProps {}

export const AppProviders = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <AuthProvider>
                        <Restricted resource={'viewUsers'}>
                            <div>test</div>
                        </Restricted>
                    </AuthProvider>
                </ThemeProvider>
            </PersistGate>
        </ReduxProvider>
    )
}
