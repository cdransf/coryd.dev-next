import Mail from './mail.svg'
import Calendar from './calendar.svg'
import Github from './github.svg'
import Rss from './rss.svg'
import Lastfm from './lastfm.svg'
import Trakt from './trakt.svg'
import Oku from './oku.svg'

const components = {
    mail: Mail,
    calendar: Calendar,
    github: Github,
    rss: Rss,
    lastfm: Lastfm,
    trakt: Trakt,
    oku: Oku,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialSvg = components[kind]

    return (
        <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
            />
        </a>
    )
}

export default SocialIcon
