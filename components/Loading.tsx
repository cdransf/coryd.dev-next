import Spinner from '@/components/icons/loading/Spinner'
import ThreeDots from '@/components/icons/loading/ThreeDots'

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
            <Spinner />
        </div>
    )
}
