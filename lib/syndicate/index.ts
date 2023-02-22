import fs from 'fs'
import { extract, FeedEntry } from '@extractus/feed-extractor'
import { DATA_PATH, SERVICES } from './config'
import createMastoPost from './createMastoPost'

export default async function syndicate(init?: string) {
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
            fs.writeFileSync(DATA_PATH, JSON.stringify(CACHE_DATA))
        }
    }

    // if we don't have syndication data, write it
    if (!fs.existsSync(DATA_PATH)) {
        fs.writeFile(DATA_PATH, JSON.stringify(CLEAN_OBJECT()), { flag: 'wx' }, (err) => {
            if (err) throw err
            hydrateCache()
        })
    }

    // rewrite the sync data if init is reset
    if (fs.existsSync(DATA_PATH) && init === 'true') hydrateCache()

    if (fs.existsSync(DATA_PATH) && !init) {
        const existingData = JSON.parse(
            fs.readFileSync(DATA_PATH, 'utf8') || JSON.stringify(CLEAN_OBJECT())
        )

        for (const service in SERVICES) {
            const data = await extract(SERVICES[service])
            const entries = data?.entries
            if (!existingData[service].includes(entries[0].id)) {
                existingData[service].push(entries[0].id)
                fs.writeFileSync(DATA_PATH, JSON.stringify(existingData))
                createMastoPost(`${entries[0].title} ${entries[0].link}`)
            }
        }
    }
}
