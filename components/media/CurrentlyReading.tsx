import { useRss } from '@/hooks/useRss'
import { ThreeDots } from 'react-loading-icons'
import Link from '@/components/Link'

export const CurrentlyReading = () => {
    const { response, error } = useRss('/books')

    const booksList = response?.map((entry, index) => {
        const link = (
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={entry.link}
            >
                {entry.title}
            </Link>
        )

        const getLink = (index: number) => {
            if (index !== response.length - 1 && index !== response.length - 2) {
                return <span key={entry.link}>{link}, </span>
            } else if (index === response.length - 1 && response.length > 1) {
                return <span key={entry.link}> and {link}</span>
            } else {
                return <span key={entry.link}>{link}</span>
            }
        }
        return response?.length && getLink(index)
    })

    if (error) return null

    if (!response)
        return (
            <div className="icon--dots__loading">
                <ThreeDots />
            </div>
        )

    return response?.length ? (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm reading: {booksList}.
        </p>
    ) : null
}
