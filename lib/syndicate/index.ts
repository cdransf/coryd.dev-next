import siteMetadata from '@/data/siteMetadata'
import { toPascalCase } from '@/utils/formatters'
import { extract, FeedEntry } from '@extractus/feed-extractor'
import { SERVICES, TAGS } from './config'
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

    if (CONTENT && CONTENT !== '' && !init) {
        const existingData = await fetch(`${host}/api/omg/paste-get?paste=${CACHE_PASTE}`).then(
            (response) => response.json()
        )
        const existingContent = JSON.parse(existingData?.response.paste.content)

        for (const service in SERVICES) {
            const data = await extract(SERVICES[service], {
                getExtraEntryFields: (feedEntry) => {
                    return {
                        tags: feedEntry['tags'],
                    }
                },
            })
            const entries: (FeedEntry & { tags?: string })[] = data?.entries
            if (!existingContent[service].includes(entries[0].id)) {
                let tags = ''
                console.log(entries[0])
                if (entries[0].tags) {
                    entries[0].tags
                        .split(',')
                        .forEach((a, index) =>
                            index === 0
                                ? (tags += `#${toPascalCase(a)}`)
                                : (tags += ` #${toPascalCase(a)}`)
                        )
                    tags += ` ${TAGS[service]}`
                } else {
                    tags = TAGS[service]
                }
                existingContent[service].push(entries[0].id)
                createMastoPost(`${entries[0].title} ${entries[0].link} ${tags}`)
                await fetch(
                    `${host}/api/omg/paste-edit?paste=${CACHE_PASTE}&content=${JSON.stringify(
                        existingContent
                    )}`
                ).then((response) => response.json())
            }
        }
    }
}
