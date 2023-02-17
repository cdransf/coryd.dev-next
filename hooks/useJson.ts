import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useJson = (url: string, props?: any) => {
    const [response, setResponse] = useState<any>({})

    const fetcher = (url: string) =>
        fetch(url)
            .then((res) => res.json())
            .catch()
    const { data, error } = useSWR(url, fetcher, { fallbackData: props, refreshInterval: 30000 })

    useEffect(() => {
        setResponse(data)
    }, [data, setResponse])

    return {
        response,
        error,
    }
}
