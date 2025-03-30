import { Layout } from './common/components/layout/layout.tsx'
import { Home } from './pages/home/home.tsx'
import { Customers } from './pages/customers/customers.tsx'
import { IRoutes } from './common/utils/route-utils.tsx'

export const routeConfig: IRoutes = {
    element: <Layout />,
    children: [
        { index: true, element: <Home />, icon: 'pi pi-home', label: 'Home' },
        {
            path: 'customers',
            element: <Customers />,
            resource: 'viewUsers',
            icon: 'pi pi-user',
            label: 'Customers',
        },
    ],
}
