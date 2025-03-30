import { Outlet } from 'react-router'
import { TopBar } from './top-bar/top-bar'
import { Menu } from './menu/menu.tsx'
import { MenuItems } from '../../utils/menu-utils.ts'

export const Layout = () => {
    return (
        <div className="layout-wrapper px-3 pt-3">
            <div className="top-bar">
                <TopBar />
            </div>
            <div className="d-flex gap-4">
                <Menu items={MenuItems()} />
                <div>
                    <div>layout part 2</div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
