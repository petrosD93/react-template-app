import React from 'react'
import { usePermission } from '../../hooks/permission-hook.ts'

export interface SecuredProps {
    resource?: string
    children: React.JSX.Element
}

export const Secured = (props: SecuredProps) => {
    const isAllowed: boolean = usePermission(props.resource)

    if (isAllowed) {
        return <>{props.children}</>
    }

    return null
}
