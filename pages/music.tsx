import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { HeavyRotation } from '@/components/media/music/HeavyRotation'
import { RecentlyListened } from '@/components/media/music/RecentlyListened'

export default function Music() {
    return (
        <>
            <PageSEO
                title={`Music - ${siteMetadata.author}`}
                description={siteMetadata.description.music}
            />
            <div className="space-y-2 divide-y border border-x-0 border-t-0 border-gray-200 pt-6 pb-8 dark:border-gray-700 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Music
                </h1>
            </div>
            <div className="pt-8">
                <HeavyRotation />
            </div>
            <div className="py-8">
                <RecentlyListened />
            </div>
        </>
    )
}
