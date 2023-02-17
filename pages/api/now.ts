import loadNowData from '@/lib/now'

export default async function handler(req, res) {
    const response = await loadNowData()
    res.json(response)
}
