import { read } from 'feed-reader'
import { useEffect, useState } from 'react'

export const useRss = () => {
    const [response, setResponse] = useState([])
    const [url, setUrl] = useState<string | undefined>()

    useEffect(() => {
        if (url)
            read(url)
                .then((res) => {
                    setResponse(res.entries)
                })
                .catch()
    }, [setResponse, url])

    return {
        response,
        setUrl,
    }
}
