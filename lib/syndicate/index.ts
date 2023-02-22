import siteMetadata from '@/data/siteMetadata'
import { extract, FeedEntry } from '@extractus/feed-extractor'
import { SERVICES } from './config'
import createMastoPost from './createMastoPost'

export default async function syndicate(init?: string) {
    const env = process.env.NODE_ENV
    const CACHE_PASTE = 'syndication-cache.json'
    let host = siteMetadata.siteUrl
    if (env === 'development') host = 'http://localhost:3000'

    const CLEAN_OBJECT = () => {
        const INIT_OBJECT = {}
        Object.keys(SERVICES).map((service) => (INIT_OBJECT[service] = []))
        return INIT_OBJECT
    }

    async function hydrateCache() {
        const CACHE_DATA = CLEAN_OBJECT()
        for (const service in SERVICES) {
            const data = await extract(SERVICES[service])
            const entries = data?.entries
            entries.map((entry: FeedEntry) => CACHE_DATA[service].push(entry.id))
        }
        await fetch(
            `${host}/api/omg/paste-edit?paste=${CACHE_PASTE}&content=${JSON.stringify(CACHE_DATA)}`
        ).then((response) => response.json())
    }

    const DATA = await fetch(`${host}/api/omg/paste-get?paste=${CACHE_PASTE}`).then((response) =>
        response.json()
    )
    const CONTENT = DATA?.response.paste.content

    // rewrite the sync data if init is reset
    if (CONTENT === '' || init === 'true') hydrateCache()

    if (CONTENT !== '' && !init) {
        const existingData = await fetch(`${host}/api/omg/paste-get?paste=${CACHE_PASTE}`).then(
            (response) => response.json()
        )
        const existingContent = JSON.parse(existingData?.response.paste.content)

        for (const service in SERVICES) {
            const data = await extract(SERVICES[service])
            const entries = data?.entries
            if (!existingContent[service].includes(entries[0].id)) {
                existingContent[service].push(entries[0].id)
                await fetch(
                    `${host}/api/omg/paste-edit?paste=${CACHE_PASTE}&content=${JSON.stringify(
                        existingContent
                    )}`
                ).then((response) => response.json())
                createMastoPost(`${entries[0].title} ${entries[0].link}`)
            }
        }
    }
}
