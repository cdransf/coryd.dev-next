import Image from 'next/image'

export const Artist = (props) => {
    const { artist } = props
    return artist.attributes ? (
        <div className="relative h-20 w-20 overflow-hidden rounded-md after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-md after:bg-gradient-to-b after:from-transparent after:to-gray-800 md:h-40 md:w-40 lg:h-full lg:w-full">
            <Image
                className="h-20 w-20 rounded-md border border-gray-200 dark:border-gray-700 md:h-40 md:w-40 lg:h-full lg:w-full"
                alt={artist.attributes.name}
                src={
                    artist.attributes.artwork.url.includes('blobstore')
                        ? artist.attributes.artwork.url
                        : artist.attributes.artwork.url.replace('{w}', '208').replace('{h}', '208')
                }
                width="208"
                height="208"
            />
            <div className="absolute left-2 bottom-2 z-20 text-xs text-white drop-shadow-sm">
                <p className="font-bold">{artist.attributes.name}</p>
            </div>
        </div>
    ) : null
}
