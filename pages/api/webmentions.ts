import loadWebmentions from '@/lib/webmentions'

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

    const target = req.query.target
    const response = await loadWebmentions(target)
    res.json(response)
}
