import { Oval, ThreeDots } from 'react-loading-icons'

export const Dots = (props) => {
    const { className } = props

    return (
        <div className={`${className || ''} icon-loading`}>
            <ThreeDots />
        </div>
    )
}

export const Spin = (props) => {
    const { className } = props

    return (
        <div className={`${className || ''} icon-loading`}>
            <Oval />
        </div>
    )
}
