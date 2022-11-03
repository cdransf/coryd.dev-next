import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import Link from 'next/link'

export const CurrentlyListening = () => {
    const { response, error } = useJson('/api/music/recent')
    const tracks = response?.data
    const track: AppleMusicApi.Song = tracks?.[0]
    const CurrentlyPlaying = (
        <>
            {track?.attributes.url ? (
                <Link
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href={track?.attributes.url}
                    target="_blank"
                    rel="noopener noreferrer me"
                >
                    {track?.attributes.name} by {track?.attributes.artistName}
                </Link>
            ) : (
                <>
                    {track?.attributes.name} by {track?.attributes.artistName}
                </>
            )}
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
