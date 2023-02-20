export default async function handler(req: any, res: any) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

    const limit = req.query.limit || 10
    const data = await fetch('https://api.omg.lol/address/cory/statuses/').then((response) =>
        response.json()
    )
    const statuses = data.response.statuses.splice(0, limit)
    res.json(statuses)
}
