import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import * as Fathom from 'fathom-client'
import LayoutWrapper from '@/components/LayoutWrapper'
import { useEffect } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        Fathom.load(siteMetadata.fathomCode, {
            url: siteMetadata.fathomUrl,
            includedDomains: [siteMetadata.siteDomain],
        })
        function onRouteChangeComplete() {
            Fathom.trackPageview()
        }
        router.events.on('routeChangeComplete', onRouteChangeComplete)
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, [router.events])

    return (
        <ErrorBoundary>
            <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                </Head>
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
