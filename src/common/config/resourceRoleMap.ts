import { ResourceRoleMap as RRM } from '../../providers/permission-provider/permission-provider.tsx'

export const ResourceRoleMap: RRM = {
    viewUsers: { operation: 'AND', permissions: ['users_view'] },
}
