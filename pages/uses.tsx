import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
    return (
        <>
            <PageSEO
                title={`Projects - ${siteMetadata.author}`}
                description={siteMetadata.description}
            />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Uses
                    </h1>
                </div>
                <div className="container py-12">
                    <p>Things and software that I use regularly.</p>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Hardware
                    </h3>
                    <ul className="list-inside list-disc pl-10">
                        <li className="mt-1.5 mb-2">Mac Mini (2018 - Intel)</li>
                        <li className="mt-1.5 mb-2">
                            Dell Monitor (5ish years old and going strong)
                        </li>
                        <li className="mt-1.5 mb-2">Apple Magic Keyboard</li>
                        <li className="mt-1.5 mb-2">Apple Magic Trackpad</li>
                        <li className="mt-1.5 mb-2">Homepod Mini for audio</li>
                        <li className="mt-1.5 mb-2">Raspberry Pi for Homebridge</li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Software
                    </h3>
                    <ul className="list-inside list-disc pl-10">
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://code.visualstudio.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Visual Studio Code
                            </a>{' '}
                            +{' '}
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://draculatheme.com/pro"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Dracula Pro
                            </a>{' '}
                            - VS Code has become the defacto standard editor and I enjoy using it.
                            Dracula Pro has become my go-to syntax theme everywhere it's available.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://iterm2.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                iTerm2
                            </a>{' '}
                            - I know VS Code has a built in terminal, but I've always preferred
                            iTerm as a separate, native one.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.raycast.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Raycast
                            </a>{' '}
                            - My current Spotlight replacement. The flexibility, speed and wide
                            array of plugins make it incredibly useful.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://culturedcode.com/things/"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Things
                            </a>{' '}
                            - The best, native task manager for the Apple ecosystem. Simple,
                            reliable and powerful.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://1password.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                1Password
                            </a>{' '}
                            - The best password manager around. I've been using it for 11 years and
                            counting.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://obsidian.md"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Obsidian
                            </a>{' '}
                            - the most flexible and powerful note-taking/knowledgebase/markdown app
                            I've found so far. It's not native but it's so good it doesn't matter.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.reederapp.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Reeder
                            </a>{' '}
                            - to browse my feeds synced via Feedbin.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://goodlinks.app"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                GoodLinks
                            </a>{' '}
                            - my bookmarking app of choice.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.neptunesmac.app"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                NepTunes
                            </a>{' '}
                            - to control iTunes and scrobble plays to Last.fm.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://apps.apple.com/app/marvis-pro/id1447768809"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Marvis Pro
                            </a>{' '}
                            - my preferred music player with scrobbling support on iOS.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://overcast.fm"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Overcast
                            </a>{' '}
                            - for podcasts and, ocassionally,{' '}
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://github.com/insidegui/PodcastMenu"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Podcast Menu
                            </a>{' '}
                            on macOS.
                        </li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Services
                    </h3>
                    <ul className="list-inside list-disc pl-10">
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://ref.fm/u28147925"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Fastmail
                            </a>{' '}
                            - my favorite email provider, bar none. It's fast, robust and
                            standards-compliant.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://savvycal.com/?r=coryd"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                SavvyCal
                            </a>{' '}
                            - my new, favorite scheduling tool. Powerful, flexible and works with
                            Fastmail's calendar seamlessly.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://feedbin.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Feedbin
                            </a>{' '}
                            - far and away my favorite RSS sync service. I route newletters to it
                            via an email alias and also use Feedbin{' '}
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://feedbin.com/blog/2013/11/06/actions-workflows-for-your-rss-feeds/"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                actions
                            </a>{' '}
                            to filter out a wide range of posts from the feeds I subscribe to.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://nextdns.io/?from=m56mt3z6"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                NextDNS
                            </a>{' '}
                            - a privacy-focused DNS provider with myriad blocking, caching and
                            security options. I have a baseline profile configured on my home
                            network and a more aggressive one installed via a profile on my devices
                            directly.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://music.apple.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Apple Music
                            </a>{' '}
                            - primarily as a way to sync music. I import my library and allow Apple
                            to store it rather than leveraging their cataologue.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://slack.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Slack
                            </a>{' '}
                            - my family has a Slack channel that we use instead of group message
                            threads and I participate in a number of other groups.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://plausible.io"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Plausible
                            </a>{' '}
                            - privacy respecting analytics for this site. Feel free to opt out{' '}
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://coryd.dev/static/analytics.html"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                here
                            </a>
                            .
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://last.fm"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Last.fm
                            </a>{' '}
                            - to track what music I'm listening to and discover new bands (I also
                            use their API for the "I'm listening to display..." on the home page).
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://trakt.tv"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Trakt
                            </a>{' '}
                            - to keep track of what shows and movies I'm watching.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://oku.club"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Oku
                            </a>{' '}
                            - to track the books I'm reading and discover new ones (the "I'm
                            reading..." display on the home page is sourced from an RSS feed they
                            provide).
                        </li>
                    </ul>
                    <p className="mt-6">
                        Check out{' '}
                        <a
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="https://uses.tech"
                            target="_blank"
                            rel="noopener noreferrer me"
                        >
                            uses.tech
                        </a>{' '}
                        for more lists like this one.
                    </p>
                </div>
            </div>
        </>
    )
}
