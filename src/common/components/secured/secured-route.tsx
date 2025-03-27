import { usePermission } from '../../hooks/permission-hook.ts'
import { SecuredProps } from './secured.tsx'

export const SecuredRoute = (props: SecuredProps) => {
    const isAllowed: boolean = usePermission(props.resource)

    if (isAllowed) {
        return <>{props.children}</>
    }

    return <div>Access Denied!</div>
}
