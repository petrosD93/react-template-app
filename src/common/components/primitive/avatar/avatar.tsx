import { Avatar as PrimeAvatar, AvatarProps as PrimeAvatarProps } from 'primereact/avatar'

export interface AvatarProps extends PrimeAvatarProps {}

export const Avatar = (props: AvatarProps) => {
    return <PrimeAvatar {...props} />
}
