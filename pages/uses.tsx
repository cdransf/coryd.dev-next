import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import * as Fathom from 'fathom-client'

export default function Uses() {
    return (
        <>
            <PageSEO
                title={`Uses - ${siteMetadata.author}`}
                description={siteMetadata.description.uses}
            />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Uses
                    </h1>
                </div>
                <div className="py-12">
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
                        {siteMetadata.description.uses}
                    </p>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Hardware
                    </h3>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">Midnight MacBook Air (2022 - M2)</li>
                        <li className="mt-1.5 mb-2">
                            27" Dell Monitor (courtesy of a previous employer that didn't want it
                            back)
                        </li>
                        <li className="mt-1.5 mb-2">Apple Magic Keyboard</li>
                        <li className="mt-1.5 mb-2">Apple Magic Trackpad</li>
                        <li className="mt-1.5 mb-2">Homepod Mini for audio</li>
                        <li className="mt-1.5 mb-2">Raspberry Pi for Homebridge</li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        macOS + iOS
                    </h3>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://todoist.com/things"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Todoist
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://obsidian.md"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Obsidian
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.flightyapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Flighty
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://parcelapp.net"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Parcel
                            </Link>
                        </li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        iOS
                    </h3>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://apps.apple.com/app/marvis-pro/id1447768809"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Marvis Pro
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://tapbots.com/ivory"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ivory
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://apps.apple.com/ca/app/status-log/id6444921793"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                status.log
                            </Link>
                        </li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        macOS
                    </h3>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.sublimetext.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Sublime Text
                            </Link>{' '}
                            +{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://draculatheme.com/pro"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dracula Pro
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://iterm2.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                iTerm2
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://alfredapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Alfred
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://webcatalog.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Webcatalog
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.keyboardmaestro.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Keyboard Maestro
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://flexibits.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Fantastical
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.arqbackup.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Arq
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://replay.software/sleeve"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sleeve
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://magnet.crowdcafe.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Magnet
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.noodlesoft.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hazel
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.macbartender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Bartender
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://v2.airbuddy.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                AirBuddy
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.peterborgapps.com/lingon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lingon
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.nightbirdsevolve.com/meta/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Meta
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://software.charliemonroe.net/permute/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Permute
                            </Link>
                        </li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Services
                    </h3>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://referworkspace.app.goo.gl/7BYo"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('EWREAPNX', 0)
                                }}
                            >
                                Google Workspace
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://savvycal.com/?r=coryd"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('UXTCQANC', 0)
                                }}
                            >
                                SavvyCal
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://usefathom.com/ref/EGXCON"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('RQEGF0WP', 0)
                                }}
                            >
                                Fathom Analytics
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://nextdns.io/?from=m56mt3z6"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('CG4FNTCN', 0)
                                }}
                            >
                                NextDNS
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://dnsimple.com/r/3a7cbb9e15df8f"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('MFQVXQQ9', 0)
                                }}
                            >
                                DNSimple
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://1password.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1Password
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://www.ivpn.net"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IVPN
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://jumpshare.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jumpshare
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://music.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Apple Music
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://slack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Slack
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Discord
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://trakt.tv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Trakt
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://letterboxd.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Letterboxd
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://oku.club"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Oku
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://glass.photo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Glass
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://readwise.io/read"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reader
                            </Link>
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
