import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import Link from 'next/link'

const CurrentlyListening = () => {
    const { response, error } = useJson('/api/music?limit=1')
    const tracks = response?.recenttracks?.track
    const track = tracks?.[0]
    const CurrentlyPlaying = (
        <>
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={track?.url}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track?.name}
            </Link>
            {` `}
            by
            {` `}
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://ddg.gg?q=!rym ${encodeURIComponent(track?.artist?.['#text'])}`}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track?.artist?.['#text']}
            </Link>
            {track?.artist?.['#text'].slice(-1) !== '.' ? '.' : ''}
        </>
    )

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading">
                <ThreeDots />
            </div>
        )

    return tracks?.length ? (
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
                    d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
            </svg>
            {CurrentlyPlaying}
        </p>
    ) : null
}

export default CurrentlyListening
