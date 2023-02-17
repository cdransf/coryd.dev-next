import Link from 'next/link'
import { Spin } from '@/components/Loading'

const Movies = (props) => {
    const { movies } = props

    if (!movies) return <Spin className="my-12 flex justify-center" />

    return (
        <>
            <h3 className="pt-4 pb-2.5 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Watching: movies
            </h3>
            <ul className="list-inside list-disc pl-5 md:pl-10">
                {movies?.map((movie) => (
                    <li key={movie.id} className="mt-1.5 mb-2">
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={movie.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Movies
