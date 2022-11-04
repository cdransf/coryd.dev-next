import Link from 'next/link'
import Image from 'next/image'
import { BlankAlbumCover } from '@/components/media/music/visual/BlankAlbumCover'

export const Track = (props) => {
    const { track }: { track: AppleMusicApi.Song } = props
    return track.attributes ? (
        <div className="grid grid-cols-3 items-center text-sm">
            <div className="h-12 w-12 rounded-md">
                <Link
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href={`https://ddg.gg?q=!rymrelease ${encodeURIComponent(
                        track.attributes.albumName
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                >
                    {track.attributes.artwork.url.includes('blobstore') ? (
                        <BlankAlbumCover width="w-12" height="h-12" />
                    ) : (
                        <Image
                            className="rounded-md border border-gray-200 dark:border-gray-700"
                            alt={track.attributes.albumName}
                            src={
                                track.attributes.artwork.url.includes('blobstore')
                                    ? track.attributes.artwork.url
                                    : track.attributes.artwork.url
                                          .replace('{w}', '48')
                                          .replace('{h}', '48')
                            }
                            width={48}
                            height={48}
                        />
                    )}
                </Link>
            </div>
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://song.link/i/${track.id}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
            >
                <span className="px-2 font-bold">{track.attributes.name}</span>
            </Link>
            <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://ddg.gg?q=!rym ${encodeURIComponent(track.attributes.artistName)}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
            >
                <span>{track.attributes.artistName}</span>
            </Link>
        </div>
    ) : null
}
