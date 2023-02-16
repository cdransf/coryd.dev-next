import { useJson } from '@/hooks/useJson'
import Link from 'next/link'
import { ThreeDots } from 'react-loading-icons'

const Reading = () => {
    const { response, error } = useJson('/api/books')
    const books = response?.entries

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading">
                <ThreeDots />
            </div>
        )

    return (
        <>
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Reading
            </h3>
            <ul className="list-inside list-disc pl-5 md:pl-10">
                {books?.map((book) => (
                    <li key={book.published} className="mt-1.5 mb-2">
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Reading
