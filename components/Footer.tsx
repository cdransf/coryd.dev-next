import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/icons/social'

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-2.5 md:space-x-3.5 lg:space-x-4">
                    <SocialIcon kind="gmail" href={`mailto:${siteMetadata.email}`} size={6} />
                    <SocialIcon kind="savvycal" href={siteMetadata.savvycal} size={6} />
                    <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                    <SocialIcon kind="mastodon" href={siteMetadata.mastodon} size={6} />
                    <SocialIcon kind="camera" href={siteMetadata.glass} size={6} />
                    <SocialIcon kind="lastfm" href={siteMetadata.lastfm} size={6} />
                    <SocialIcon kind="letterboxd" href={siteMetadata.letterboxd} size={6} />
                    <SocialIcon kind="trakt" href={siteMetadata.trakt} size={6} />
                    <SocialIcon kind="oku" href={siteMetadata.oku} size={6} />
                </div>
                <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-100">
                    <Link href="/uses">Uses</Link>
                    <div>{` • `}</div>
                    <Link href="/referrals">Referrals</Link>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
                <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-100"></div>
            </div>
        </footer>
    )
}
