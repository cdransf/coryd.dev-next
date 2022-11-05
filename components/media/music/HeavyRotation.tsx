import Link from 'next/link'
import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import { Album } from '@/components/media/music/visual/Album'

export const HeavyRotation = () => {
    const { response, error } = useJson('/api/music?type=heavyRotation')
    const albums = response?.data
    const HeavyRotation = (
        <div className="pb-8">
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Heavy rotation
            </h3>
            <div className="grid grid-cols-[1fr_minmax(0px,1280px)_1fr] gap-y-8">
                {albums
                    ? albums?.map((album: AppleMusicApi.Album) => (
                          <div className="justify-self-center" key={album.id}>
                              <Link
                                  href={`https://ddg.gg?q=!rymrelease ${encodeURIComponent(
                                      album.attributes.name
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  passHref
                              >
                                  <Album album={album} />
                              </Link>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    )

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading flex items-center justify-center pb-8">
                <ThreeDots />
            </div>
        )

    return albums?.length ? HeavyRotation : null
}
