import Mail from './mail.svg'
import Github from './github.svg'
import Rss from './rss.svg'
import AppleMusic from './applemusic.svg'
import Trakt from './trakt.svg'
import Oku from './oku.svg'
import Pocket from './pocket.svg'

import Link from 'next/link'

const components = {
    mail: Mail,
    github: Github,
    rss: Rss,
    applemusic: AppleMusic,
    trakt: Trakt,
    oku: Oku,
    pocket: Pocket,
}

const SocialIcon = ({
    kind,
    href,
    size = 8,
    className,
}: {
    kind: string
    href: string
    size: number
    className?: string
}) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialSvg = components[kind]

    return (
        <Link
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size} ${className}`}
            />
        </Link>
    )
}

export default SocialIcon
