import { Outlet } from 'react-router'
import { TopBar } from './top-bar/top-bar'

export const Layout = () => {
    return (
        <div className="layout-wrapper px-3 pt-3">
            <div className="top-bar">
                <TopBar />
            </div>
            <div>layout part 1</div>
            <div>layout part 2</div>
            <Outlet />
        </div>
    )
}
