import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import { Track } from '@/components/media/music/visual/Track'

export const RecentlyListened = () => {
    const { response, error } = useJson('/api/music?type=recent')
    const tracks = response?.data
    const RecentlyListened = (
        <div className="pb-8">
            <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Recent tracks
            </h3>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {tracks
                    ? tracks?.map((track: AppleMusicApi.Song) => (
                          <div className="space-b-4 py-2" key={track.id}>
                              <Track track={track} />
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

    return tracks?.length ? RecentlyListened : null
}
