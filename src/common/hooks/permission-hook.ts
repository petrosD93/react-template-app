import React from 'react'
import { PermissionContext } from '../../providers/permission-provider/permission-provider.tsx'

export const usePermission = (resource: string) => React.useContext(PermissionContext).allowed(resource)
