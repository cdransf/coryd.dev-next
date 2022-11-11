import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import Link from 'next/link'

export const CurrentlyListening = () => {
    const { response, error } = useJson('/api/music')
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
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm listening to: {CurrentlyPlaying}
        </p>
    ) : null
}
