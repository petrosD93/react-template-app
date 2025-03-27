import { Login } from '../../common/components/login/login.tsx'
import { useAppSelector } from '../../store/storeHooks.ts'
import { loggedInUser } from '../../store/slices/auth-slice.ts'
import { User } from '../../store/interfaces/auth-state'
import React, { Suspense, useEffect, useState } from 'react'
import { PermissionProvider } from '../permission-provider/permission-provider.tsx'
import AuthService from '../../common/services/auth.service.ts'
import { ResourceRoleMap } from '../../common/config/resourceRoleMap.ts'
import { LoadingPage } from '../../common/components/loading-page/loading-page.tsx'

export interface AuthProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

export const AuthProvider = (props: AuthProviderProps) => {
    const user: User | undefined = useAppSelector(loggedInUser)
    const authService = AuthService.getInstance()
    const [userLoaded, setUserLoaded] = useState(false)

    useEffect(() => {
        authService.authStateReady().then(() => {
            setUserLoaded(true)
        })
    }, [])

    if (!user) {
        return <Login />
    }

    return (
        <>
            {userLoaded ? (
                <Suspense fallback={<LoadingPage />}>
                    <PermissionProvider permissions={authService.getPermissions()} resourceRolesMap={ResourceRoleMap}>
                        {props.children}
                    </PermissionProvider>
                </Suspense>
            ) : (
                <LoadingPage />
            )}
        </>
    )
}
