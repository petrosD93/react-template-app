import { Avatar } from '../../primitive/avatar/avatar.tsx'
import { OverlayPanel } from '../../primitive/overlay-panel/overlay-panel.tsx'
import { useRef } from 'react'
import { useTheme } from '../../../hooks/theme-hook.ts'
import './user-avatar.scss'
import AuthService from '../../../services/auth.service.ts'
import { useAppDispatch } from '../../../../store/storeHooks.ts'
import { setLoggedInUser } from '../../../../store/slices/auth-slice.ts'

export const UserAvatar = () => {
    const op = useRef<any>(null)
    const theme = useTheme()
    const dispatch = useAppDispatch()

    const authService = AuthService.getInstance()

    const onSignOut = () => {
        authService.signOut().then(() => {
            dispatch(setLoggedInUser(undefined))
        })
    }
    return (
        <div className="user-avatar-wrapper">
            <Avatar label="V" size="large" onClick={(e) => op.current?.toggle?.(e)} />
            <OverlayPanel ref={op} appendTo="self" style={{ top: '50px' }}>
                <div className="d-flex flex-column gap-1">
                    <div
                        className="theme-wrapper menu-item d-flex align-items-center gap-3"
                        onClick={() => {
                            theme.changeTheme()
                            op.current?.hide?.()
                        }}
                    >
                        <i className={`pi ${theme.getTheme() === 'light' ? 'pi-moon' : 'pi-sun'}`}></i>
                        <span>{theme.getTheme() === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                    </div>
                    <div className="logout-wrapper menu-item d-flex align-items-center gap-3" onClick={onSignOut}>
                        <i className="pi pi-power-off"></i>
                        <span>Logout</span>
                    </div>
                </div>
            </OverlayPanel>
        </div>
    )
}
