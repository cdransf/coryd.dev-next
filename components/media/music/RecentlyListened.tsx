import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import { Track } from '@/components/media/music/visual/Track'
import Link from 'next/link'

export const RecentlyListened = () => {
    const { response, error } = useJson('/api/music/recent')
    const tracks = response?.data
    const RecentlyListened = (
        <>
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Recent tracks
            </h3>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {tracks
                    ? tracks?.map((track) => (
                          <div className="space-b-4 py-2" key={track.id}>
                              {track.attributes.url ? (
                                  <Link
                                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                      href={track.attributes.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      passHref
                                  >
                                      <Track track={track} />
                                  </Link>
                              ) : (
                                  <Track track={track} />
                              )}
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

    return tracks?.length ? RecentlyListened : null
}
