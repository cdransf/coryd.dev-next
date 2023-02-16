/* eslint-disable @next/next/no-img-element */
import { Media } from '@/types/api'
import Link from 'next/link'
import { ALBUM_DENYLIST } from '@/utils/constants'

const Cover = (props: { media: Media; type: 'artist' | 'album' }) => {
    const { media, type } = props
    const image = (media: Media) => {
        let img = ''
        if (type === 'album')
            img = !ALBUM_DENYLIST.includes(media.name.replace(/\s+/g, '-').toLowerCase())
                ? media.image[media.image.length - 1]['#text']
                : `/api/media?album=${media.name.replace(/\s+/g, '-').toLowerCase()}`
        if (type === 'artist')
            img = `/api/media?artist=${media.name.replace(/\s+/g, '-').toLowerCase()}`
        return img
    }

    return (
        <Link
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            title={media.name}
        >
            <div className="relative">
                <div className="absolute left-0 top-0 h-full w-full rounded-lg border border-primary-500 bg-cover-gradient dark:border-gray-500"></div>
                <div className="absolute left-1 bottom-2 drop-shadow-md">
                    <div className="px-1 text-xs font-bold text-white">{media.name}</div>
                    <div className="px-1 text-xs text-white">
                        {type === 'album' ? media.name : `${media.playcount} plays`}
                    </div>
                </div>
                <img src={image(media)} alt={media.name} className="rounded-lg" />
            </div>
        </Link>
    )
}

export default Cover
