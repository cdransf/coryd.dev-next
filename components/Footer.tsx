import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-2 md:space-x-3 lg:space-x-4">
                    <SocialIcon kind="fastmail" href={`mailto:${siteMetadata.email}`} size={6} />
                    <SocialIcon kind="savvycal" href={siteMetadata.savvycal} size={6} />
                    <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                    <SocialIcon kind="rss" href={siteMetadata.rss} size={6} />
                    <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} rel="me" />
                    <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={6} />
                    <SocialIcon
                        kind="letterboxd"
                        href={siteMetadata.letterboxd}
                        size={6}
                        rel="me"
                    />
                    <SocialIcon kind="trakt" href={siteMetadata.trakt} size={6} />
                    <SocialIcon kind="oku" href={siteMetadata.oku} size={6} />
                </div>
                <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-100">
                    <Link href="/">{siteMetadata.title}</Link>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    )
}
