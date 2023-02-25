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

### [TV](pages/api/tv.ts)

| Request type | URI       | Params |
| ------------ | --------- | ------ |
| `GET`        | `/api/tv` | None   |
