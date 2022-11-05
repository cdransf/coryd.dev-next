import Link from 'next/link'
import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import { Artist } from '@/components/media/music/visual/Artist'
import { shuffleArray } from '@/utils/arrays'

export const FavoriteArtists = () => {
    const { response, error } = useJson('/api/music/favorite-artists')
    const ARTISTS_LIMIT = 4
    const artists = shuffleArray(response?.data?.[0].relationships?.contents?.data)?.splice(
        0,
        ARTISTS_LIMIT
    )
    const FavoriteArtists = (
        <div className="pb-8">
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Favorite artists
            </h3>
            <div className="flex flex-row justify-between gap-3">
                {artists
                    ? artists?.map((artist: AppleMusicApi.Artist) => (
                          <div className="justify-self-center" key={artist.id}>
                              <Link
                                  href={`https://ddg.gg?q=!rym ${encodeURIComponent(
                                      artist.attributes.name
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  passHref
                              >
                                  <Artist artist={artist} />
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

    return artists?.length ? FavoriteArtists : null
}
