import { Status } from '@/types/api'

export default async function handler(req: { query: { limit: number } }, res) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

    const limit = req.query.limit || 10
    const data: { response: { statuses: Status[] } } = await fetch(
        'https://api.omg.lol/address/cory/statuses/'
    ).then((response) => response.json())
    const statuses = data.response.statuses.splice(0, limit)
    res.json(statuses)
}
