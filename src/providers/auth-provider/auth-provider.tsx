import { Login } from '../../common/components/login/login.tsx'
import { useAppSelector } from '../../store/storeHooks.ts'
import { loggedInUser } from '../../store/slices/auth-slice.ts'
import { User } from '../../store/interfaces/auth-state'
import React, { Suspense, useEffect, useState } from 'react'
import { PermissionProvider } from '../permission-provider/permission-provider.tsx'
import AuthService from '../../common/services/auth.service.ts'
import { ResourceRoleMap } from '../../common/config/resourceRoleMap.ts'

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
    // const dispatch = useAppDispatch()

    // const onSignUp = () => {
    //     startTransition(async () => {
    //         authService.signup('k', 'k').then(() => {
    //             console.log('User logged in')
    //         })
    //     })
    // }

    // const onSignOut = () => {
    //     authService.signOut().then(() => {
    //         dispatch(setLoggedInUser(undefined))
    //     })
    // }
    //

    if (!user) {
        return <Login></Login>
    }

    return (
        <>
            {userLoaded ? (
                <Suspense fallback={<div>loading permisssions</div>}>
                    <PermissionProvider permissions={authService.getPermissions()} resourceRolesMap={ResourceRoleMap}>
                        {props.children}
                    </PermissionProvider>
                </Suspense>
            ) : (
                'user loading'
            )}
        </>
    )
}
