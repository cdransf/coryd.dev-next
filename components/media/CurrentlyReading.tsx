import { ThreeDots } from 'react-loading-icons'
import Link from 'next/link'
import { useJson } from '@/hooks/useJson'

export const CurrentlyReading = () => {
    const { response, error } = useJson('/api/books')

    const booksList = response?.entries?.map((entry, index) => {
        const link = (
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {entry.title}
            </Link>
        )

        const getLink = (index: number) => {
            if (index !== response.entries.length - 1 && index !== response.entries.length - 2) {
                return <span key={entry.link}>{link}, </span>
            } else if (index === response.entries.length - 1 && response.entries.length > 1) {
                return <span key={entry.link}> and {link}</span>
            } else {
                return <span key={entry.link}>{link}</span>
            }
        }
        return response?.entries?.length && getLink(index)
    })

    if (error) return null

    if (!response)
        return (
            <div className="icon--dots__loading">
                <ThreeDots />
            </div>
        )

    return response?.entries?.length ? (
        <p className="!mt-1 text-lg leading-7 text-gray-500 dark:text-gray-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-1 inline h-5 w-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
            </svg>
            {booksList}.
        </p>
    ) : null
}
