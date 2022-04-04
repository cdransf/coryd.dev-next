import { useEffect } from 'react'
import { useRss } from '@/hooks/useRss'

export const CurrentlyReading = () => {
    const { response, setUrl } = useRss()

    useEffect(() => {
        setUrl('/books')
    }, [setUrl])

    const booksList = response.map((entry, index) => {
        const link = (
            <a
                key={entry.title.toLowerCase()}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer me"
            >
                {entry.title}
            </a>
        )

        const getLink = (index) => {
            if (index !== response.length - 1 && index !== response.length - 2) {
                return <>{link}, </>
            } else if (index === response.length - 1 && response.length > 1) {
                return <> and {link}.</>
            } else {
                return <>{link}</>
            }
        }
        return response.length && getLink(index)
    })

    return response.length ? <>I'm currently reading: {booksList}</> : null
}
