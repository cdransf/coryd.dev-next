import Image from 'next/image'
import { BlankAlbumCover } from '@/components/media/music/visual/BlankAlbumCover'

export const Track = (props) => {
    const { track } = props
    return track.attributes ? (
        <div className="grid grid-cols-3 items-center text-sm">
            <div className="h-12 w-12 rounded-md">
                {track.attributes.artwork.url.includes('blobstore') ? (
                    <BlankAlbumCover width="w-12" height="h-12" />
                ) : (
                    <Image
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
            </div>
            <span className="px-2 font-bold">{track.attributes.name}</span>
            <span>{track.attributes.artistName}</span>
        </div>
    ) : null
}
