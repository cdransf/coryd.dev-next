export type NowData = {
    now: {
        now: {
            about: string
            making: string
        }
    }
    books: {
        md: string
    }
    movies: {
        md: string
    }
    tv: {
        md: string
    }
    music: {
        artists: {
            html: string
        }
        albums: {
            html: string
        }
    }
}

export type Media = {
    mbid: string
    name: string
    url: string
    image: { size: string; '#text': string }[]
    artist?: {
        url: string
        name: string
    }
    playcount?: string
}
