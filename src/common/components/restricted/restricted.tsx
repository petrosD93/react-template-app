import { usePermission } from '../../hooks/permission-hook.ts'
import React from 'react'

export interface RestrictedProps {
    resource: string
    children: React.ReactNode
}

export const Restricted = ({ children, resource }: RestrictedProps) => {
    const allowed = usePermission(resource)
    return allowed ? <>{children}</> : null
}
