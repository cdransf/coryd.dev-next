export default async function handler(req, res) {
    const paste = req.query.paste
    const data = await fetch(`https://api.omg.lol/address/cory/pastebin/${paste}`).then(
        (response) => response.json()
    )
    res.json(data)
}
