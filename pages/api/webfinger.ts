export default function handler(req, res) {
    const MASTODON_META = {
        subject: 'acct:coryd@mastodon.social',
        aliases: ['https://mastodon.social/@coryd', 'https://mastodon.social/users/coryd'],
        links: [
            {
                rel: 'http://webfinger.net/rel/profile-page',
                type: 'text/html',
                href: 'https://mastodon.social/@coryd',
            },
            {
                rel: 'self',
                type: 'application/activity+json',
                href: 'https://mastodon.social/users/coryd',
            },
            {
                rel: 'http://ostatus.org/schema/1.0/subscribe',
                template: 'mastodon.social/authorize_interaction?uri={uri}',
            },
        ],
    }

    res.status(200).json(MASTODON_META)
}
