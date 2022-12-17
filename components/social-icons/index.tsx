import Mail from './mail.svg'
import Github from './github.svg'
import Rss from './rss.svg'
import Lastfm from './lastfm.svg'
import Letterboxd from './letterboxd.svg'
import Simkl from './simkl.svg'
import Oku from './oku.svg'
import Mastodon from './mastodon.svg'

import Link from 'next/link'

const components = {
    mail: Mail,
    github: Github,
    rss: Rss,
    lastfm: Lastfm,
    letterboxd: Letterboxd,
    simkl: Simkl,
    oku: Oku,
    mastodon: Mastodon,
}

const SocialIcon = ({
    kind,
    href,
    size = 8,
    fill,
    rel,
}: {
    kind: string
    href: string
    size: number
    fill?: string
    rel?: string
}) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialSvg = components[kind]

    return (
        <Link
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel={`noopener noreferrer ${rel}`}
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`${
                    fill ? fill : 'fill-current'
                } text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
            />
        </Link>
    )
}

export default SocialIcon
