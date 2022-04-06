import { useEffect } from 'react'
import { useJson } from '@/hooks/useJson'

export const CurrentlyListening = () => {
    const { response, setRequest } = useJson()

    useEffect(() => {
        setRequest({ url: '/api/music', cacheDuration: 5 })
    }, [setRequest])

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

    return tracks?.length ? (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm listening to: {CurrentlyPlaying}.
        </p>
    ) : null
}
