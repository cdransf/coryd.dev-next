const siteMetadata = {
    title: 'Cory Dransfeldt',
    author: 'Cory Dransfeldt',
    headerTitle: 'Cory Dransfeldt',
    description:
        "I'm a software developer in Camarillo, California. I enjoy hanging out with my beautiful family and 4 rescue dogs, technology, automation, music, writing, reading and tv and movies.",
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: 'https://coryd.dev',
    siteRepo: 'https://github.com/cdransf/coryd.dev',
    siteLogo: '/static/images/logo.webp',
    image: '/static/images/avatar.webp',
    socialBanner: '/static/images/twitter-card.png',
    email: 'fun.song5595@coryd.dev',
    github: 'https://github.com/cdransf',
    rss: '/feed.xml',
    applemusic: 'https://music.apple.com/profile/cdme',
    trakt: 'https://trakt.tv/users/cdransf',
    oku: 'https://oku.club/user/cory',
    locale: 'en-US',
    analytics: {
        plausibleDataDomain: 'coryd.dev',
        plausibleSrcUrl: '/script.67532e4133a4t4551aza.js',
        plausibleApiUrl: '/api/58441z2164b5e7880yec',
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo
        // Please add your .env file and modify it according to your selection
        provider: '',
    },
    comment: {
        // If you want to use a commenting system other than giscus you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: '', // supported providers: giscus, utterances, disqus
        giscusConfig: {},
        utterancesConfig: {},
        disqusConfig: {},
    },
}

module.exports = siteMetadata
