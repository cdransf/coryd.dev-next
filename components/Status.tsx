import Link from 'next/link'
import { Dots } from '@/components/Loading'
import { Status } from '@/types/api'

const Status = (props: { status: Status }) => {
    const { status } = props

    if (!status) return <Dots />

    return (
        <p className="mt-2 text-lg leading-7">
            <Link
                className="flex flex-row items-center text-gray-500 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                href={`https://status.coryd.dev/${status?.id}`}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {status?.emoji}
                {` `}
                {status?.content}
            </Link>
        </p>
    )
}

export default Status
