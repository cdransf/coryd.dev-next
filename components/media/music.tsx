import { useEffect } from 'react'
import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'

export const CurrentlyListening = () => {
    const { response, error, setUrl } = useJson()

    useEffect(() => {
        setUrl('/api/music')
    }, [setUrl])

    const tracks = response?.recenttracks?.track
    const track = tracks?.[0]
    const CurrentlyPlaying = (
        <a
            key={track?.artist.mbid}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={track?.url}
            target="_blank"
            rel="noopener noreferrer me"
        >
            {track?.name} by {track?.artist['#text']}
        </a>
    )

    if (error) return null

    if (!response)
        return (
            <div className="icon--dots__loading">
                <ThreeDots />
            </div>
        )

    return tracks?.length ? (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm listening to: {CurrentlyPlaying}.
        </p>
    ) : null
}
