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
                    <ul className="list-disc pl-10">
                        <li>Mac Mini (2018 - Intel)</li>
                        <li>Dell Monitor (5ish years old and going strong)</li>
                        <li>Apple Magic Keyboard</li>
                        <li>Apple Magic Trackpad</li>
                        <li>Homepod Mini for music</li>
                        <li>Raspberry Pi for Homebridge</li>
                    </ul>
                    <h3 className="pt-3 pb-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Software
                    </h3>
                    <ul className="list-disc pl-10">
                        <li>
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
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://iterm2.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                iTerm2
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://wavebox.io"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Wavebox
                            </a>{' '}
                            (for everything most web apps)
                        </li>
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://todoist.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Todoist
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://obsidian.md"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Obsidian
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="http://slack.com"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Slack
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://brushedtype.co/doppler/"
                                target="_blank"
                                rel="noopener noreferrer me"
                            >
                                Doppler Music Player
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
