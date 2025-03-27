import { RouteObject } from 'react-router'
import { Layout } from './common/components/layout/layout.tsx'
import { Home } from './pages/home/home.tsx'

export const Routes: RouteObject[] = [
    {
        Component: Layout,
        children: [{ index: true, Component: Home }],
    },
]
