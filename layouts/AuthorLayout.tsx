import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
    children: ReactNode
    frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
    const { name, avatar, tagline } = frontMatter

    return (
        <>
            <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        About
                    </h1>
                </div>
                <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="flex flex-col items-center space-x-2 pt-8">
                        <Image
                            src={avatar}
                            alt="avatar"
                            width="192"
                            height="192"
                            className="h-48 w-48 rounded-full"
                        />
                        <h3 className="pt-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                            <span>{tagline}</span>
                            <span className="inline-block animate-waving-hand pl-2">👋🏻</span>
                        </h3>
                    </div>
                    <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
