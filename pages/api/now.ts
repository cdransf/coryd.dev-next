import { extract } from '@extractus/feed-extractor'
import siteMetadata from '@/data/siteMetadata'

export default async function handler(req, res) {
    const TV_KEY = process.env.API_KEY_TRAKT
    const MUSIC_KEY = process.env.API_KEY_LASTFM
    const env = process.env.NODE_ENV
    let host = siteMetadata.siteUrl
    if (env === 'development') host = 'http://localhost:3000'

    // status
    const statusUrl = 'https://api.omg.lol/address/cory/statuses/'
    const statusJson = await fetch(statusUrl).then((response) => response.json())

    // artists
    const artistsUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=cdme_&api_key=${MUSIC_KEY}&limit=8&format=json&period=7day`
    const artistsJson = await fetch(artistsUrl).then((response) => response.json())

    // albums
    const albumsUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=cdme_&api_key=${MUSIC_KEY}&limit=8&format=json&period=7day`
    const albumsJson = await fetch(albumsUrl).then((response) => response.json())

    // books
    const booksUrl = `${host}/feeds/books`
    const booksJson = await extract(booksUrl)

    // movies
    const moviesUrl = `${host}/feeds/movies`
    const moviesJson = await extract(moviesUrl)
    moviesJson.entries = moviesJson.entries.splice(0, 5)

    // tv
    const tvUrl = `${host}/feeds/tv?slurm=${TV_KEY}`
    const tvJson = await extract(tvUrl)
    tvJson.entries = tvJson.entries.splice(0, 5)

    // current track
    const currentTrackUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cdme_&api_key=${MUSIC_KEY}&limit=1&format=json&period=7day`
    const currentTrackJson = await fetch(currentTrackUrl).then((response) => response.json())

    // unified response
    const response = {
        status: statusJson.response.statuses.splice(0, 1)[0],
        artists: artistsJson?.topartists.artist,
        albums: albumsJson?.topalbums.album,
        books: booksJson?.entries,
        movies: moviesJson?.entries,
        tv: tvJson?.entries,
        currentTrack: currentTrackJson?.recenttracks?.track?.[0],
    }

    res.json(response)
}
