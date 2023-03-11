import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import CurrentlyListening from '@/components/media/CurrentlyListening'
import Status from '@/components/Status'
import loadNowData from '@/lib/now'
import { MAX_POST_DISPLAY } from '@/utils/constants'
import dynamic from 'next/dynamic'

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[]; now }> = async () => {
    const posts = await getAllFilesFrontMatter('blog')
    const now = await loadNowData('status,currentTrack')
    return { props: { posts, now }, revalidate: 960 }
}

const DynamicPostList = dynamic(() => import('@/components/posts/PostIndexList'))

export default function Home({ posts, now }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description.default} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-6 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-2xl font-extrabold leading-3 tracking-tight text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 sm:text-3xl md:text-4xl">
                        <Link href="/now" passHref>
                            Now
                        </Link>
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
                        {siteMetadata.description.default}
                    </p>
                    <Status status={now.status} />
                    <CurrentlyListening track={now.currentTrack} />
                </div>
                <DynamicPostList posts={posts} />
            </div>
            {posts.length > MAX_POST_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="all posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}
        </>
    )
}
