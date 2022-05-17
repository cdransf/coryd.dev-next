import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                    <SocialIcon kind="calendar" href={siteMetadata.calendar} size={6} />
                    <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                    <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
                    <SocialIcon kind="rss" href={siteMetadata.rss} size={6} />
                    <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={6} />
                    <SocialIcon kind="trakt" href={siteMetadata.trakt} size={6} />
                    <SocialIcon kind="oku" href={siteMetadata.oku} size={6} />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="/">{siteMetadata.title}</Link>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    )
}
