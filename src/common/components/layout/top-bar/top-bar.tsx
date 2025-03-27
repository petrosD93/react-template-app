import { UserAvatar } from './user-avatar.tsx'

export const TopBar = () => {
    return (
        <div className="top-bar-wrapper d-flex align-items-center justify-content-between">
            <div className="left-panel d-flex"></div>
            <div className="right-panel d-flex justify-content-end">
                <UserAvatar />
            </div>
        </div>
    )
}
