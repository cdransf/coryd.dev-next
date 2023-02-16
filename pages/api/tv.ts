import { extract } from '@extractus/feed-extractor'
import siteMetadata from '@/data/siteMetadata'

export default async function handler(req: any, res: any) {
    const limit = req.query.limit || 10
    const KEY = process.env.API_KEY_TRAKT
    const env = process.env.NODE_ENV
    let host = siteMetadata.siteUrl
    if (env === 'development') host = 'http://localhost:3000'
    const url = `${host}/feeds/tv?slurm=${KEY}`
    const result = await extract(url, {
        getExtraEntryFields: (feedEntry) => {
            return {
                image: feedEntry['media:content']['@_url'],
                thumbnail: feedEntry['media:thumbnail']['@_url'],
            }
        },
    })
    result.entries = result.entries.splice(0, limit)
    res.json(result)
}
