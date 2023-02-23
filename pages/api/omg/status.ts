import { Status } from '@/types/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

    const limit = parseInt(req.query.limit?.toString()) || 10
    const data: { response: { statuses: Status[] } } = await fetch(
        'https://api.omg.lol/address/cory/statuses/'
    ).then((response) => response.json())
    const statuses = data.response.statuses.splice(0, limit)
    res.json(statuses)
}
