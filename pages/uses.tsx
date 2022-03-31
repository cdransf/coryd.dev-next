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
                        <li className="mt-1.5 mb-2">Homepod Mini for music</li>
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
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://iterm2.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                iTerm2
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://wavebox.io"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Wavebox
                            </a>{' '}
                            (for everything Google/Gmail related)
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://todoist.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Todoist
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://obsidian.md"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Obsidian
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://slack.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Slack
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://brushedtype.co/doppler/"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Doppler Music Player
                            </a>
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
                            +
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://feedbin.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Feedbin
                            </a>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://overcast.fm"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Overcast
                            </a>
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
