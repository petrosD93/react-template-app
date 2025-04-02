import { UserAvatar } from './user-avatar.tsx'
import './top-bar.scss'

export interface TopBarProps {
    onHideMenu: () => void
}

export const TopBar = (props: TopBarProps) => {
    return (
        <div className="top-bar-wrapper d-flex align-items-center justify-content-between">
            <div className="left-panel d-flex">
                <div className="menu-handle-wrapper" onClick={props.onHideMenu}>
                    <i className="menu-handle pi pi-bars"></i>
                </div>
            </div>
            <div className="right-panel d-flex justify-content-end">
                <UserAvatar />
            </div>
        </div>
    )
}
