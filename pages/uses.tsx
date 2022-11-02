import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Uses() {
    return (
        <>
            <PageSEO
                title={`Uses - ${siteMetadata.author}`}
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
                                href="https://www.sublimetext.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Sublime Text
                            </a>{' '}
                            +{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://draculatheme.com/pro"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dracula Pro
                            </Link>{' '}
                            - I've gone back to using Sublime Text for it's responsiveness and
                            lightweight approach to editing (while also relying on a number of
                            plugins). Dracula Pro has become my go-to syntax theme everywhere it's
                            available.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://iterm2.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                iTerm2
                            </Link>{' '}
                            - my preferred macoS terminal emulator.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://alfredapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Alfred
                            </Link>{' '}
                            - My favorite Spotlight replacement. The flexibility, speed and wide
                            array of workflows make it incredibly useful.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://culturedcode.com/things"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Things
                            </Link>{' '}
                            - My go to task manager — simple, well-designed and extremely reliable.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://1password.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1Password
                            </Link>{' '}
                            - The best password manager around. I've been using it for{' '}
                            {new Date().getFullYear() - 2011} years and counting.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://craft.do"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Craft
                            </Link>{' '}
                            - A powerful and incredibly flexible documentation/note taking platform.
                            I use it for everything from quick notes to web clipping pages to
                            reference later to writing posts for this site.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.reederapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reeder
                            </Link>{' '}
                            - to browse my feeds synced via Feedbin.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://getpocket.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pocket
                            </Link>{' '}
                            - my read it later app of choice.
                        </li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Services
                    </h3>
                    <ul className="list-inside list-disc pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://ref.fm/u28939392"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fastmail
                            </Link>{' '}
                            - my choice for an email provider. I've found its features and approach
                            to be the best at managing my email. The company embraces and advances
                            open standards and supports just about any workflow you can imagine for
                            handling email.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://feedbin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Feedbin
                            </Link>{' '}
                            - far and away my favorite RSS sync service. I use{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://feedbin.com/blog/2013/11/06/actions-workflows-for-your-rss-feeds/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                actions
                            </Link>{' '}
                            to filter out a wide range of posts from the feeds I subscribe to.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://nextdns.io/?from=m56mt3z6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NextDNS
                            </Link>{' '}
                            - a privacy-focused DNS provider with myriad blocking, caching and
                            security options. I have a baseline profile configured on my home
                            network and a more aggressive one installed via a profile on my devices
                            directly.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://music.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Apple Music
                            </Link>{' '}
                            - primarily as a way to sync music. I import my library and allow Apple
                            to store it rather than leveraging their cataologue. It's MusicKit.js
                            API also powers my
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://slack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Slack
                            </Link>{' '}
                            - my family has a Slack channel that we use instead of group message
                            threads and I participate in a number of other groups.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://plausible.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Plausible
                            </Link>{' '}
                            - privacy respecting analytics for this site. Feel free to opt out{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://coryd.dev/static/analytics.html"
                            >
                                here
                            </Link>
                            .
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://trakt.tv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Trakt
                            </Link>{' '}
                            - to keep track of what shows and movies I'm watching.
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://oku.club"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Oku
                            </Link>{' '}
                            - to track the books I'm reading and discover new ones (the "I'm
                            reading..." display on the home page is sourced from an RSS feed they
                            provide).
                        </li>
                    </ul>
                    <p className="mt-6">
                        Check out{' '}
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="https://uses.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            uses.tech
                        </Link>{' '}
                        for more lists like this one.
                    </p>
                </div>
            </div>
        </>
    )
}
