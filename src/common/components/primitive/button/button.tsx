import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button'

export interface ButtonProps extends PrimeButtonProps {
    id: string
}

export const Button = (props: ButtonProps) => {
    return <PrimeButton {...props} />
}
