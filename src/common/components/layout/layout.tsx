import { Outlet } from 'react-router'
import { TopBar } from './top-bar/top-bar'
import { Menu } from './menu/menu.tsx'
import { MenuItems } from '../../utils/menu-utils.ts'
import './layout.scss'
import { useState } from 'react'

export const Layout = () => {
    const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true)

    return (
        <div className="layout-wrapper px-3 pt-3">
            <div className="top-bar">
                <TopBar onHideMenu={() => setIsMenuHidden((prevState) => !prevState)} />
            </div>
            <div className="d-flex gap-4">
                <div className={`layout-menu-wrapper ${isMenuHidden ? 'menu-hidden' : ''}`}>
                    <Menu items={MenuItems()} />
                </div>
                <div className={`main-content-wrapper ${isMenuHidden ? 'menu-hidden' : ''}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
