![Cory Dransfeldt](/public/static/images/social-card.png)

[![scheduled-cron-job](https://github.com/cdransf/coryd.dev/actions/workflows/scheduled.yaml/badge.svg)](https://github.com/cdransf/coryd.dev/actions/workflows/scheduled.yaml) ![Vercel](https://vercelbadge.vercel.app/api/cdransf/coryd.dev)

# coryd.dev

Hi! I'm Cory. 👋🏻

This is the code for my personal website and portfolio. Built using Next.js and deployed on Vercel.

**Built with:**

-   [Sublime Text](https://sublimetext.com)
-   [iTerm](https://iterm2.com)
-   [Next.js](https://nextjs.org)
-   [Vercel](https://vercel.com)
-   [GitHub](https://github.com)
-   [git](https://git-scm.com)

## Submodules

Git submodules are used to split out different assets from the core application. `Media` is private and fetched at build time using [vercel-submodules](https://github.com/junhoyeo/vercel-submodules).

-   Media: `public/static/images/media`

---

## APIs

### [Books](pages/api/books.ts)

| Request type | URI          | Params |
| ------------ | ------------ | ------ |
| `GET`        | `/api/books` | None   |

This API returns the books I'm currently reading on [Oku](https://oku.club), transformed from the RSS feed available on the appropriate collection.

### [Movies](pages/api/movies.ts)

| Request type | URI           | Params |
| ------------ | ------------- | ------ |
| `GET`        | `/api/movies` | None   |

This API returns the movies I've recently logged on [Letterboxd](https://letterboxd.com), transformed from the RSS feed available on my profile.

### [Movies](pages/api/music.ts)

| Request type | URI          | Params                                                                |
| ------------ | ------------ | --------------------------------------------------------------------- |
| `GET`        | `/api/music` | `{ type?: string; limit?: string; format?: string; period?: string }` |

This API returns the music I've recently listened to and scrobbled to [Last.fm](https://last.fm). It supports several parameters, namely `type` which is used to determine what whether albums, artists or tracks are returned. The `limit` parameter controls the number of entries in te response. The `format` parameter controls the response format (XML or JSON) and the `period` parameter controls the time period covered in the response.

### [TV](pages/api/tv.ts)

| Request type | URI       | Params |
| ------------ | --------- | ------ |
| `GET`        | `/api/tv` | None   |

This API returns the tv episodes I've recently logged on [Trakt](https://trakt.tv) fetched from their API.

### [Webfinger](pages/api/webfinger.ts)

| Request type | URI                      | Params |
| ------------ | ------------------------ | ------ |
| `GET`        | `/api/webfinger`         | None   |
| `GET`        | `/.well-known/webfinger` | None   |

This returns a response consistent with the [Webfinger](https://webfinger.net) specification intended to make discovery on open platforms like Mastodon easier (e.g. searching for `anything@coryd.dev` will yield my profile in search).

### [Webfinger](pages/api/webmentions.ts)

| Request type | URI       | Params               |
| ------------ | --------- | -------------------- |
| `GET`        | `/api/tv` | `{ target: string }` |

This returns webmentions for a given post on my site, with the `target` parameter accepting a url for the target post.
