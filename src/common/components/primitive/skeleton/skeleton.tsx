import { Skeleton as PrimeSkeleton, SkeletonProps as PrimeSkeletonProps } from 'primereact/skeleton'

export interface SkeletonProps extends PrimeSkeletonProps {}

export const Skeleton = (props: SkeletonProps) => {
    return <PrimeSkeleton {...props} borderRadius={props.shape === 'rectangle' ? '6px' : props.borderRadius} />
}
