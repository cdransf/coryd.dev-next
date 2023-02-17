import { Dots } from '@/components/Loading'
import { Book } from '@/components/icons'
import Link from 'next/link'

const CurrentlyReading = (props) => {
    const { books } = props

    if (!books) return <Dots />

    const booksList = books?.map((entry, index) => {
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
            if (index !== books?.length - 1 && index !== books?.length - 2) {
                return <span key={entry.link}>{link}, </span>
            } else if (index === books?.length - 1 && books?.length > 1) {
                return (
                    <span key={entry.link}>
                        <span className="mx-1">and</span>
                        {link}
                    </span>
                )
            } else {
                return <span key={entry.link}>{link}</span>
            }
        }
        return books?.length && getLink(index)
    })

    return (
        <p className="!mt-1 flex flex-row items-center text-lg leading-7 text-gray-500 dark:text-gray-100">
            <span className="mr-1 inline-block h-5 w-5">
                <Book />
            </span>
            {booksList}.
        </p>
    )
}

export default CurrentlyReading
