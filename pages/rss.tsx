import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function RSS() {
    return (
        <>
            <PageSEO
                title={`RSS - ${siteMetadata.author}`}
                description={siteMetadata.description.rss}
            />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        RSS
                    </h1>
                </div>
                <div className="py-12">
                    <p className="mb-5 text-lg leading-7 text-gray-500 dark:text-gray-100">
                        {siteMetadata.description.rss}
                    </p>
                </div>
            </div>
        </>
    )
}
