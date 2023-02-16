import { useJson } from '@/hooks/useJson'
import Link from 'next/link'
import { ThreeDots } from 'react-loading-icons'

const Status = () => {
    const { response, error } = useJson('/api/omg/status?limit=1')
    const status = response?.[0]

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading">
                <ThreeDots />
            </div>
        )

    return (
        <p className="!mt-1 text-lg leading-7">
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
