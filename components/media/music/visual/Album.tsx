import Image from '@/components/Image'
import { BlankAlbumCover } from '@/components/media/music/visual/BlankAlbumCover'

export const Album = (props) => {
    const { album } = props
    return album.attributes ? (
        <div className="relative h-24 w-24 overflow-hidden rounded-md rounded-md after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-md after:bg-gradient-to-b after:from-transparent after:to-gray-600 md:h-48 md:w-48 lg:h-56 lg:w-56">
            {album.attributes.artwork.url.includes('blobstore') ? (
                <BlankAlbumCover width="w-24 lg:w-56 md:w-48" height="h-24 lg:h-56 md:h-48" />
            ) : (
                <Image
                    className="h-24 w-24 rounded-md md:h-48 md:w-48 lg:h-56 lg:w-56"
                    alt={album.attributes.albumName}
                    src={`/api/imageproxy?imageUrl=${album.attributes.artwork.url
                        .replace('{w}', '320')
                        .replace('{h}', '320')}`}
                    width="320"
                    height="320"
                />
            )}
            <div className="absolute left-2 bottom-2 z-20 text-xs text-white drop-shadow-sm">
                <p className="font-bold">{album.attributes.name}</p>
                <p>{album.attributes.artistName}</p>
            </div>
        </div>
    ) : null
}
