import { Dots } from '@/components/Loading'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Track } from '@/types/api'

const CurrentlyListening = (props: { track: Track }) => {
    const { track } = props

    if (!track) return <Dots />

    const CurrentlyPlaying = (
        <>
            <Link
                className="text-gray-500 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                href={track.url}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track.name} by {track.artist?.['#text']}
            </Link>
        </>
    )

    return (
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
            <MusicalNoteIcon className="mr-1 inline h-5 w-5" />
            {CurrentlyPlaying}
        </p>
    )
}

export default CurrentlyListening
