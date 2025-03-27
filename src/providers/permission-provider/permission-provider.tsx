import React, { Context, createContext, use, useMemo } from 'react'

export const PermissionProvider = (props: _PermissionProvider) => {
    const initPerms: FirebasePermissions | undefined = use(props.permissions)

    const permissions: string[] = useMemo(() => {
        const permissions: string[] = []
        if (initPerms) {
            Object.keys(initPerms).forEach((key) => {
                initPerms[key].forEach((permission) => {
                    permissions.push(`${key}_${permission}`)
                })
            })
            return permissions
        }

        return []
    }, [props.permissions])

    const allowed = (resource: string | undefined): boolean => {
        if (resource) {
            const selectedResource = props.resourceRolesMap[resource]
            if (!selectedResource) {
                console.error(`${resource} does not exist in the defined resourceRoleMap`)
            }
            return checkRoles(selectedResource)
        }
        return true
    }

    const checkRoles = (roles: RoleOperation): boolean => {
        return roles ? (typeof roles === 'string' ? permissions.includes(roles) : constructRoles(roles)) : true
    }

    const constructRoles = (roles: _RoleOperation): boolean => {
        let iterationPerm = roles.operation === 'AND'
        roles?.permissions?.forEach((value: RoleOperation) => {
            const tmpCondition = typeof value === 'string' ? permissions.includes(value) : constructRoles(value)
            roles.operation === 'AND' ? (iterationPerm &&= tmpCondition) : (iterationPerm ||= tmpCondition)
        })

        return iterationPerm
    }

    return (
        <PermissionContext.Provider
            value={{
                allowed,
            }}
        >
            {props.children}
        </PermissionContext.Provider>
    )
}

const defaultBehavior: _PermissionContext = {
    allowed: () => false,
}
export const PermissionContext: Context<_PermissionContext> = createContext<_PermissionContext>(defaultBehavior)

interface _PermissionProvider {
    permissions: Promise<FirebasePermissions | undefined>
    resourceRolesMap: ResourceRoleMap
    // unauthorizedAction: () => unknown
    children: React.ReactNode | React.ReactNode[]
}

export type RoleOperation = _RoleOperation | string

interface _RoleOperation {
    operation: 'AND' | 'OR'
    permissions: Array<string | _RoleOperation>
}

export interface ResourceRoleMap {
    [resourceName: string]: RoleOperation
}

export interface _PermissionContext {
    allowed: (resource?: string) => boolean
}

export interface FirebasePermissions {
    [key: string]: string[]
}
