import Fastmail from './fastmail.svg'
import Mail from './mail.svg'
import SavvyCal from './savvycal.svg'
import Github from './github.svg'
import Rss from './rss.svg'
import Lastfm from './lastfm.svg'
import Letterboxd from './letterboxd.svg'
import Trakt from './trakt.svg'
import Oku from './oku.svg'
import Mastodon from './mastodon.svg'
import BuyMeACoffee from './buymeacoffee.svg'
import Camera from './camera.svg'

import Link from 'next/link'

const components = {
    fastmail: Fastmail,
    mail: Mail,
    savvycal: SavvyCal,
    github: Github,
    rss: Rss,
    lastfm: Lastfm,
    letterboxd: Letterboxd,
    trakt: Trakt,
    oku: Oku,
    mastodon: Mastodon,
    buymeacoffee: BuyMeACoffee,
    camera: Camera,
}

const SocialIcon = ({
    kind,
    href,
    size = 8,
    className,
    fill,
    rel,
}: {
    kind: string
    href: string
    size: number
    className?: string
    fill?: string
    rel?: string
}) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialSvg = components[kind]

    return (
        <Link
            className={`${className || ''}`}
            target="_blank"
            rel={`noopener noreferrer ${rel}`}
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`${
                    fill ? fill : 'fill-current'
                } text-gray-700 hover:text-purple-500 dark:text-gray-200 dark:hover:text-purple-400 h-${size} w-${size}`}
            />
        </Link>
    )
}

export default SocialIcon
