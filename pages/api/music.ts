export default async function handler(req, res) {
    const KEY = process.env.API_KEY_LASTFM
    const data = await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cdme_&api_key=${KEY}&limit=1&format=json`
    ).then((response) => response.json())
    res.json(data)
}
