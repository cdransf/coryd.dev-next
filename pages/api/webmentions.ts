import loadWebmentions from '@/lib/webmentions'

export default async function handler(req, res) {
    const response = await loadWebmentions()
    res.json(response)
}
