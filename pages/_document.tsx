import siteMetadata from '@/data/siteMetadata'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href={siteMetadata.siteUrl + siteMetadata.icons.apple}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={siteMetadata.siteUrl + siteMetadata.icons.favLg}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={siteMetadata.siteUrl + siteMetadata.icons.favSm}
                    />
                    <link
                        rel="manifest"
                        href={siteMetadata.siteUrl + siteMetadata.icons.manifest}
                    />
                    <link
                        rel="mask-icon"
                        href={siteMetadata.siteUrl + siteMetadata.icons.pinnedTab}
                        color={siteMetadata.themeColor}
                    />
                    <meta name="msapplication-TileColor" content={siteMetadata.themeColor} />
                    <meta name="theme-color" content={siteMetadata.themeColor} />
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                </Head>
                <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
