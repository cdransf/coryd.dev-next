import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import Link from 'next/link'

export const CurrentlyListening = () => {
    const { response, error } = useJson('/api/music/recent')
    const tracks = response?.data
    const track: AppleMusicApi.Song = tracks?.[0]
    const CurrentlyPlaying = (
        <>
            {track?.id.includes('.') ? (
                <>{track?.attributes.name}</>
            ) : (
                <Link
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href={`https://song.link/i/${track?.id}`}
                    target="_blank"
                    rel="noopener noreferrer me"
                >
                    {track?.attributes.name}
                </Link>
            )}
            {` `}
            by
            {` `}
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://ddg.gg?q=!rym ${encodeURIComponent(track?.attributes.artistName)}`}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track?.attributes.artistName}
            </Link>
            {track?.attributes.artistName.slice(-1) !== '.' ? '.' : ''}
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
