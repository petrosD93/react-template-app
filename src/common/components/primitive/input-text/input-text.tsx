import { FloatLabel } from 'primereact/floatlabel'
import { InputText as PrimeInputText, InputTextProps as PrimeInputTextProps } from 'primereact/inputtext'
import './input-text.scss'

export interface InputTextProps extends Omit<PrimeInputTextProps, 'onChange'> {
    id: string
    label: string
    onChange: (value: string) => void
}

export const InputText = (props: InputTextProps) => {
    return (
        <div className="input-text-wrapper">
            <FloatLabel>
                <PrimeInputText {...props} onChange={(e) => props.onChange?.(e.target.value)}></PrimeInputText>
                <label htmlFor={props.id}>{props.label}</label>
            </FloatLabel>
        </div>
    )
}
