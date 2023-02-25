import { formatDate } from '@/utils/formatters'
import Link from 'next/link'
import Tag from '@/components/Tag'

const PostsSearchList = (props) => {
    const { filteredBlogPosts, displayPosts } = props
    return (
        <ul>
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                    <li key={slug} className="py-4">
                        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                            <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-100">
                                    <time dateTime={date}>{formatDate(date)}</time>
                                </dd>
                            </dl>
                            <div className="space-y-3 xl:col-span-3">
                                <div>
                                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                        <Link
                                            href={`/blog/${slug}`}
                                            className="text-gray-900 dark:text-gray-100"
                                        >
                                            {title}
                                        </Link>
                                    </h3>
                                    <div className="flex flex-wrap">
                                        {tags.map((tag) => (
                                            <Tag key={tag} text={tag} />
                                        ))}
                                    </div>
                                </div>
                                <div className="prose max-w-none text-gray-500 dark:text-gray-100">
                                    {summary}
                                </div>
                            </div>
                        </article>
                    </li>
                )
            })}
        </ul>
    )
}

export default PostsSearchList
