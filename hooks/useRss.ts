import { read } from 'feed-reader'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useRss = () => {
    const [response, setResponse] = useState([])
    const [url, setUrl] = useState<string | undefined>()

    const fetcher = (url: string) =>
        read(url)
            .then((res) => res.entries)
            .catch()
    const { data, error } = useSWR(url, fetcher)

    useEffect(() => {
        setResponse(data)
    }, [data, setResponse])

    return {
        response,
        error,
        setUrl,
    }
}
