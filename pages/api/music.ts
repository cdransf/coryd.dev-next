export default async function handler(req, res) {
    const bearer = `Bearer ${process.env.API_APPLE_MUSIC_TOKEN}`
    const token = process.env.API_APPLE_MUSIC_USER_TOKEN
    const query = req.query
    const { type } = query

    const ALBUM_LIMIT = 6
    const API_MAP = {
        current: 'https://api.music.apple.com/v1/me/recent/played/tracks?limit=1',
        recent: 'https://api.music.apple.com/v1/me/recent/played/tracks',
        heavyRotation: `https://api.music.apple.com/v1/me/history/heavy-rotation?limit=${ALBUM_LIMIT}`,
        favoriteArtists: 'https://api.music.apple.com/v1/me/recommendations/18-6NcH6SJmz5we',
    }

    if (!type) return res.status(500).send({ success: false, message: 'Type is required. Thx.' })

    const data = await fetch(API_MAP[type], {
        headers: {
            Authorization: bearer,
            'Music-User-Token': token,
        },
    }).then((response) => response.json())
    res.json(data)
}
