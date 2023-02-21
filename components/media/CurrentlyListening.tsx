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
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={track.url}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track.name}
            </Link>
            <span className="mx-1">by</span>
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://ddg.gg?q=!rym ${encodeURIComponent(track.artist?.['#text'])}`}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {track.artist?.['#text']}
            </Link>
            {track.artist?.['#text'].slice(-1) !== '.' ? '.' : ''}
        </>
    )

    return (
        <p className="!mt-1 flex flex-row items-center text-lg leading-7 text-gray-500 dark:text-gray-100">
            <span className="mr-1 inline-block h-5 w-5">
                <MusicalNoteIcon />
            </span>
            {CurrentlyPlaying}
        </p>
    )
}

export default CurrentlyListening
