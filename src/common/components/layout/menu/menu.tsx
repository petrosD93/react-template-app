import './menu.scss'
import { MenuItem } from '../../../utils/menu-utils.ts'
import { useLocation, useNavigate } from 'react-router'

export interface MenuProps {
    items: MenuItem[]
}

export const Menu = (props: MenuProps) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className="menu-wrapper d-flex flex-column gap-1 justify-content-center">
            {props.items.map((i: MenuItem) => {
                console.log('route:', i.path)
                console.log(location.pathname)
                return (
                    <div
                        onClick={() => navigate(i.path)}
                        key={`route_${i.label}_${i.path}`}
                        className={`menu-item d-flex gap-3 align-items-center ${location.pathname === `/${i.path}` ? 'menu-active' : ''}`}
                    >
                        <i className={i.icon} />
                        <span>{i.label}</span>
                    </div>
                )
            })}
        </div>
    )
}
