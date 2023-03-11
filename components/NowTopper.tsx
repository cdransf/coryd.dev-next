import siteMetadata from '@/data/siteMetadata'
import Status from '@/components/Status'
import CurrentlyListening from '@/components/media/CurrentlyListening'
import Link from 'next/link'

const NowTopper = (props) => {
    const { status, currentTrack } = props

    return (
        <div className="space-y-6 pt-6 pb-8 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-3 tracking-tight text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 sm:text-3xl md:text-4xl">
                <Link href="/now" passHref>
                    Now
                </Link>
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
                {siteMetadata.description.default}
            </p>
            <Status status={status} />
            <CurrentlyListening track={currentTrack} />
        </div>
    )
}

export default NowTopper
