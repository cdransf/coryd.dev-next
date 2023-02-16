export default async function handler(req: any, res: any) {
    const limit = req.query.limit || 10
    const data = await fetch('https://api.omg.lol/address/cory/statuses/').then((response) =>
        response.json()
    )
    const statuses = data.response.statuses.splice(0, limit)
    res.json(statuses)
}
