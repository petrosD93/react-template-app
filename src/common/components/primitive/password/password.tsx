import { FloatLabel } from 'primereact/floatlabel'
import { Password as PrimePassword, PasswordProps as PrimePasswordProps } from 'primereact/password'
import './password.scss'

export interface PasswordProps extends Omit<PrimePasswordProps, 'onChange'> {
    id: string
    label: string
    onChange: (value: string) => void
}

export const Password = (props: PasswordProps) => {
    return (
        <div className="password-wrapper">
            <FloatLabel>
                <PrimePassword {...props} onChange={(e) => props.onChange(e.target.value)} toggleMask />

                <label htmlFor={props.id}>{props.label}</label>
            </FloatLabel>
        </div>
    )
}
