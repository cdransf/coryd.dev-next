import Fastmail from './Fastmail'
import Mail from './Mail'
import SavvyCal from './SavvyCal'
import Github from './GitHub'
import Rss from './Rss'
import Lastfm from './Lastfm'
import Letterboxd from './Letterboxd'
import Trakt from './Trakt'
import Oku from './Oku'
import Mastodon from './Mastodon'
import BuyMeACoffee from './BuyMeACoffee'
import Camera from './Camera'

import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

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
}: {
    kind: string
    href: string
    size: number
    className?: string
    fill?: string
}) => {
    let target = '_blank'
    let rel = 'noopener noreferrer me'
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null
    if (!href.includes('http') || href.includes(siteMetadata.siteUrl)) {
        target = '_self'
        rel = 'me'
    }

    const SocialSvg = components[kind]

    return (
        <Link className={`${className || ''}`} target={target} rel={rel} href={href}>
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
