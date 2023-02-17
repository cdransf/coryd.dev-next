import { useJson } from '@/hooks/useJson'
import { ThreeDots } from 'react-loading-icons'
import Cover from '@/components/media/display/Cover'

const Artists = () => {
    const { response, error } = useJson('/api/music?type=artists&period=7day&limit=8')
    const artists = response?.topartists?.artist

    if (error) return null

    if (!response)
        return (
            <div className="icon-dots--loading">
                <ThreeDots />
            </div>
        )

    return (
        <>
            <h3 className="pt-4 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                Listening: artists
            </h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {artists?.map((artist) => (
                    <Cover key={artist.mbid} media={artist} type="artist" />
                ))}
            </div>
        </>
    )
}

export default Artists
