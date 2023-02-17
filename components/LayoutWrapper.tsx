import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from 'next/link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import BlogSearch from './BlogSearch'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import SocialIcon from './social-icons'

interface Props {
    children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
    return (
        <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
                <header className="flex items-center justify-between py-10">
                    <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                            <div className="flex items-center justify-between">
                                <div className="mr-3">
                                    <Logo />
                                </div>
                                {typeof siteMetadata.headerTitle === 'string' ? (
                                    <div className="hidden h-6 whitespace-nowrap text-2xl font-semibold !leading-none sm:block">
                                        {siteMetadata.headerTitle}
                                    </div>
                                ) : (
                                    siteMetadata.headerTitle
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center text-base leading-5">
                        <div className="hidden sm:block">
                            {headerNavLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="p-1 font-medium text-gray-700 hover:text-purple-500 dark:text-gray-200 dark:hover:text-purple-400 sm:p-4"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <BlogSearch />
                        <SocialIcon
                            className="mx-2 md:mx-3"
                            kind="buymeacoffee"
                            href={siteMetadata.buymeacoffee}
                            size={5}
                        />
                        <SocialIcon
                            className="mx-2 md:mx-3"
                            kind="rss"
                            href={siteMetadata.rss}
                            size={5}
                        />
                        <ThemeSwitch />
                        <MobileNav />
                    </div>
                </header>
                <main className="mb-auto">{children}</main>
                <Footer />
            </div>
        </SectionContainer>
    )
}

export default LayoutWrapper
