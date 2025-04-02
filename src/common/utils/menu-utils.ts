import { routeConfig } from '../../routes.tsx'
import { IRoutes } from './route-utils.tsx'

export interface MenuItem {
    label: string
    icon: string
    resource: string | undefined
    path: string
}

export const MenuItems = (): MenuItem[] => {
    const menuItems: MenuItem[] = []
    routeConfig.children?.forEach((route: IRoutes) => {
        if (route.label && route.icon && (route.index || route.path)) {
            menuItems.push({
                label: route.label,
                icon: route.icon,
                resource: route.resource,
                path: (route.index ? '' : route.path) || '',
            })
        }
    })

    return menuItems
}
