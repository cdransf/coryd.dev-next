import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import { Album } from '@/components/media/music/visual/Album'

export const HeavyRotation = () => {
    const { response, error } = useJson('/api/music/heavy-rotation')
    const ALBUM_LIMIT = 6
    const albums = response?.data?.slice(0, ALBUM_LIMIT)
    const HeavyRotation = (
        <>
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Heavy rotation
            </h3>
            <div className="grid grid-cols-[1fr_minmax(0px,1280px)_1fr] gap-y-8">
                {albums
                    ? albums?.map((album: AppleMusicApi.Album) => (
                          <div className="justify-self-center" key={album.id}>
                              <Album album={album} />
                          </div>
                      ))
                    : null}
            </div>
        </>
    )

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading flex items-center justify-center py-12">
                <ThreeDots />
            </div>
        )

    return albums?.length ? HeavyRotation : null
}
