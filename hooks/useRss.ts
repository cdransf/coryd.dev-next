import { extract } from '@extractus/feed-extractor'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useRss = (url: string) => {
    const [response, setResponse] = useState([])

    const fetcher = (url: string) =>
        extract(url)
            .then((res) => res.entries)
            .catch()
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 30000 })

    useEffect(() => {
        setResponse(data)
    }, [data, setResponse])

    return {
        response,
        error,
    }
}
