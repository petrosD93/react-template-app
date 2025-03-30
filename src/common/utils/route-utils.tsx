import { createRoutesFromElements, Route, RouteObject as RRouteObject } from 'react-router'
import React, { Suspense } from 'react'
import { SecuredRoute } from '../components/secured/secured-route.tsx'
import { LoadingPage } from '../components/loading-page/loading-page.tsx'
import { routeConfig } from '../../routes.tsx'

export type IRoutes = RRouteObject & CRouteObject

interface CRouteObject {
    resource?: string
    icon?: string
    label?: string
    children?: IRoutes[]
}

const buildRoutes = (routes: IRoutes): React.JSX.Element => {
    return (
        <Route path={routes.path} element={routes.element}>
            {routes.children?.map((route: IRoutes) => buildRoute(route))}
        </Route>
    )
}

const buildRoute = (route: IRoutes) => {
    return (
        <Route
            key={`${route.path}_key`}
            path={route.path}
            index={!!route.index as any}
            element={
                <SecuredRoute resource={route.resource}>
                    <Suspense fallback={<LoadingPage />}>{route.element}</Suspense>
                </SecuredRoute>
            }
            errorElement={<div>Error Occurred</div>}
        >
            {(route.children as any)?.map((childRoute: any) => buildRoute(childRoute))}
        </Route>
    )
}

export const routes = createRoutesFromElements(buildRoutes(routeConfig))
