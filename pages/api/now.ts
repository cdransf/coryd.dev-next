import loadNowData from '@/lib/now'

export default async function handler(req, res) {
    const endpoints = req.query.endpoints
    const response = await loadNowData(endpoints)
    res.json(response)
}
