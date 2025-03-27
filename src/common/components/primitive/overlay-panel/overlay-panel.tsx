import { OverlayPanel as PrimeOverlayPanel, OverlayPanelProps as PrimeOverlayPanelProps } from 'primereact/overlaypanel'

export interface OverlayPanelProps extends PrimeOverlayPanelProps {
    ref: React.Ref<any>
}

export const OverlayPanel = (props: OverlayPanelProps) => {
    return <PrimeOverlayPanel {...props} />
}
