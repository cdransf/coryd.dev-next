import { useJson } from '@/hooks/useJson'
import Link from 'next/link'
import { ThreeDots } from 'react-loading-icons'

const Movies = () => {
    const { response, error } = useJson('/api/movies?limit=5')
    const movies = response?.entries

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
