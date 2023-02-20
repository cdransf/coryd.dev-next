import loadNowData from '@/lib/now'

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

    const endpoints = req.query.endpoints
    const response = await loadNowData(endpoints)
    res.json(response)
}
