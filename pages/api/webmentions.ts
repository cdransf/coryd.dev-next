import loadWebmentions from '@/lib/webmentions'

export default async function handler(req, res) {
    const target = req.query.target
    const response = await loadWebmentions(target)
    res.json(response)
}
