export default async function handler(req, res) {
    const bearer = `Bearer ${process.env.API_APPLE_MUSIC_TOKEN}`
    const token = process.env.API_APPLE_MUSIC_USER_TOKEN
    const data = await fetch(`https://api.music.apple.com/v1/me/history/heavy-rotation`, {
        headers: {
            Authorization: bearer,
            'Music-User-Token': token,
        },
    }).then((response) => response.json())
    res.json(data)
}
