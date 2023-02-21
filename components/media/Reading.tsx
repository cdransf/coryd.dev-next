import Link from 'next/link'
import { Spin } from '@/components/Loading'
import { TransformedRss } from '@/types/api'

const Reading = (props: { books: TransformedRss['entries'] }) => {
    const { books } = props

    if (!books) return <Spin className="my-12 flex justify-center" />

    return (
        <>
            <h3 className="pt-4 pb-2.5 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
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
