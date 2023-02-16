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
                                    <div className="hidden h-6 text-base font-semibold !leading-none sm:block md:text-2xl">
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
                                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <BlogSearch />
                        <SocialIcon
                            className="ml-1 mr-1"
                            kind="buymeacoffee"
                            href={siteMetadata.buymeacoffee}
                            size={6}
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
