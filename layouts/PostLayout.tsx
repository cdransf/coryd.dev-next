import Link from 'next/link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { CopyLink } from '@/components/CopyLink'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import Webmentions from '@/components/webmentions'
import AvatarSmall from '@/components/icons/static/AvatarSmall'
import dynamic from 'next/dynamic'

const editUrl = (fileName: string) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

interface Props {
    frontMatter: PostFrontMatter
    authorDetails: AuthorFrontMatter[]
    next?: { slug: string; title: string }
    prev?: { slug: string; title: string }
    children: ReactNode
}

const DynamicScrollTob = dynamic(() => import('@/components/ScrollTop'))

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }: Props) {
    const { slug, fileName, date, title, tags } = frontMatter

    return (
        <SectionContainer>
            <BlogSEO
                url={`${siteMetadata.siteUrl}/blog/${slug}`}
                authorDetails={authorDetails}
                {...frontMatter}
            />
            <DynamicScrollTob />
            <article>
                <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-100">
                                        <time dateTime={date}>
                                            {new Date(date).toLocaleDateString(
                                                siteMetadata.locale,
                                                postDateTemplate
                                            )}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <PageTitle>{title}</PageTitle>
                            </div>
                        </div>
                    </header>
                    <div
                        className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                        style={{ gridTemplateRows: 'auto 1fr' }}
                    >
                        <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    {authorDetails.map((author) => (
                                        <li
                                            className="flex items-center space-x-2"
                                            key={author.name}
                                        >
                                            <AvatarSmall />
                                            <dl className="whitespace-nowrap font-medium leading-5">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-md font-bold text-gray-900 dark:text-gray-100">
                                                    {author.name}
                                                </dd>
                                                <dt className="sr-only">Email</dt>
                                                <dd>
                                                    {author.email && (
                                                        <Link
                                                            href={`mailto: ${author.email}`}
                                                            className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                        >
                                                            Email
                                                        </Link>
                                                    )}
                                                    {author.mastodon && (
                                                        <>
                                                            {` • `}
                                                            <Link
                                                                href={author.mastodon}
                                                                className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                            >
                                                                Mastodon
                                                            </Link>
                                                        </>
                                                    )}
                                                </dd>
                                            </dl>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                            <div className="prose max-w-none pt-10 pb-8 text-gray-500 dark:prose-dark dark:text-gray-100">
                                {children}
                            </div>
                            <Webmentions />
                            <div className="py-6 text-sm text-gray-700 dark:text-gray-300">
                                <CopyLink
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    origin={siteMetadata.siteUrl}
                                />
                                {` • `}
                                <Link
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    href={editUrl(fileName)}
                                >
                                    {'View on GitHub'}
                                </Link>
                            </div>
                        </div>
                        <footer>
                            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                {tags && (
                                    <div className="py-4 xl:py-8">
                                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-100">
                                            Tags
                                        </h2>
                                        <div className="flex flex-wrap">
                                            {tags.map((tag) => (
                                                <Tag key={tag} text={tag} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {(next || prev) && (
                                    <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                                        {prev && (
                                            <div>
                                                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-100">
                                                    Previous Article
                                                </h2>
                                                <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                                    <Link href={`/blog/${prev.slug}`}>
                                                        {prev.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                        {next && (
                                            <div>
                                                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-100">
                                                    Next Article
                                                </h2>
                                                <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                                    <Link href={`/blog/${next.slug}`}>
                                                        {next.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="pt-4 xl:pt-8">
                                <Link
                                    href="/blog"
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                    &larr; Back to the blog
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </SectionContainer>
    )
}
