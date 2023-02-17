import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import { MapPin, Code, Megaphone, Terminal } from '@/components/icons'
import Status from '@/components/omg/Status'
import Albums from '@/components/media/Albums'
import Artists from '@/components/media/Artists'
import Reading from '@/components/media/Reading'
import Movies from '@/components/media/Movies'
import TV from '@/components/media/TV'

export default function Now() {
    return (
        <>
            <PageSEO
                title={`Now - ${siteMetadata.author}`}
                description={siteMetadata.description.now}
            />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Now
                    </h1>
                </div>
                <div className="container py-12">
                    <h3 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Currently
                    </h3>
                    <div className="pl-5 md:pl-10">
                        <Status />
                        <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-100">
                            <MapPin className="mr-1 inline h-6 w-6" />
                            Living in Camarillo, California with my beautiful family, 4 rescue dogs
                            and a guinea pig.
                        </p>
                        <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-100">
                            <Code className="mr-1 inline h-6 w-6" />
                            Working at{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://hashicorp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HashiCorp
                            </Link>
                        </p>
                        <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-100">
                            <Megaphone className="mr-1 inline h-6 w-6" />
                            Rooting for the Lakers{` `}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://lakers.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lakers
                            </Link>
                            , for better or worse.
                        </p>
                    </div>
                    <h3 className="pt-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        Making
                    </h3>
                    <div className="pl-5 md:pl-10">
                        <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-100">
                            <Terminal className="mr-1 inline h-6 w-6" />
                            Hacking away on random projects like this page, my{' '}
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="/blog"
                                passHref
                            >
                                blog
                            </Link>{' '}
                            and whatever else I can find time for.
                        </p>
                    </div>
                    <Artists />
                    <Albums />
                    <Reading />
                    <Movies />
                    <TV />
                    <p className="pt-8 text-center text-xs text-gray-900 dark:text-gray-100">
                        (This is a{' '}
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="https://nownownow.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            now page
                        </Link>
                        , and if you have your own site,{' '}
                        <Link
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href="https://nownownow.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            you should make one, too
                        </Link>
                        .)
                    </p>
                </div>
            </div>
        </>
    )
}
