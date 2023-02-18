import { Heart, Rocket } from '@/components/icons'
import { Spin } from '@/components/Loading'
import { useRouter } from 'next/router'
import { useJson } from '@/hooks/useJson'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/utils/formatters'

const WebmentionsCore = () => {
    const { response, error } = useJson('/api/webmentions')
    const webmentions = response?.children
    const { asPath } = useRouter()
    const postPath = asPath.split('/blog').pop()
    const hasLikes =
        webmentions?.filter(
            (mention) =>
                mention['wm-property'] === 'like-of' && mention['wm-target'].includes(postPath)
        ).length > 0
    const hasComments =
        webmentions?.filter(
            (mention) =>
                mention['wm-property'] === 'in-reply-to' && mention['wm-target'].includes(postPath)
        ).length > 0
    const boostsCount = webmentions?.filter(
        (mention) =>
            (mention['wm-property'] === 'repost-of' || mention['wm-property'] === 'mention-of') &&
            mention['wm-target'].includes(postPath)
    ).length
    const hasBoosts = boostsCount > 0
    const hasMention = hasLikes || hasComments || hasBoosts

    if (error) return null
    if (!response) return <Spin className="my-2 flex justify-center" />

    const Boosts = () => {
        return (
            <div className="flex flex-row items-center">
                <div className="mr-2 h-5 w-5">
                    <Rocket />
                </div>
                {` `}
                <span className="text-sm">{boostsCount}</span>
            </div>
        )
    }

    const Likes = () => (
        <>
            <div className="flex flex-row items-center">
                <div className="mr-2 h-5 w-5">
                    <Heart />
                </div>
                <ul className="ml-2 flex flex-row">
                    {webmentions?.map((mention) => {
                        if (
                            mention['wm-property'] === 'like-of' &&
                            mention['wm-target'].includes(postPath)
                        )
                            return (
                                <li key={mention['wm-id']} className="-ml-2">
                                    <Link
                                        href={mention.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className="h-10 w-10 rounded-full border border-primary-500 dark:border-gray-500"
                                            src={mention.author.photo}
                                            alt={mention.author.name}
                                            width="40"
                                            height="40"
                                        />
                                    </Link>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </>
    )

    const Comments = () => {
        return (
            <>
                {webmentions?.map((mention) => {
                    if (
                        mention['wm-property'] === 'in-reply-to' &&
                        mention['wm-target'].includes(postPath)
                    ) {
                        return (
                            <Link
                                className="border-bottom flex flex-row items-center border-gray-100 pb-4"
                                key={mention['wm-id']}
                                href={mention.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="h-12 w-12 rounded-full border border-primary-500 dark:border-gray-500"
                                    src={mention.author.photo}
                                    alt={mention.author.name}
                                    width="48"
                                    height="48"
                                />
                                <div className="ml-3">
                                    <p className="text-sm">{mention.content?.text}</p>
                                    <p className="mt-1 text-xs">{formatDate(mention.published)}</p>
                                </div>
                            </Link>
                        )
                    }
                })}
            </>
        )
    }

    return (
        <>
            {hasMention ? (
                <div className="text-gray-500 dark:text-gray-100">
                    <h4 className="pt-3 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-2xl md:leading-10 ">
                        Webmentions
                    </h4>
                    {hasBoosts ? (
                        <div className="pt-2 pb-4">
                            <Boosts />
                        </div>
                    ) : null}
                    {hasLikes ? (
                        <div className="pt-2 pb-4">
                            <Likes />
                        </div>
                    ) : null}
                    {hasComments ? (
                        <div className="pt-2 pb-4">
                            <Comments />
                        </div>
                    ) : null}
                </div>
            ) : null}
        </>
    )
}

export default WebmentionsCore
