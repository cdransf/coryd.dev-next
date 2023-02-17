import Link from 'next/link'
import { Spin } from '@/components/Loading'

const TV = (props) => {
    const { tv } = props

    if (!tv) return <Spin className="my-12 flex justify-center" />

    return (
        <>
            <h3 className="pt-4 pb-2.5 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Watching: tv
            </h3>
            <ul className="list-inside list-disc pl-5 md:pl-10">
                {tv?.map((show) => (
                    <li key={show.id} className="mt-1.5 mb-2">
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={show.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {show.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TV
