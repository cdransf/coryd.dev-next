import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useJson = () => {
    const [response, setResponse] = useState<any>({}) // eslint-disable-line @typescript-eslint/no-explicit-any
    const [url, setUrl] = useState<string | undefined>()

    const fetcher = (url: string) =>
        fetch(url)
            .then((res) => res.json())
            .catch()
    const { data } = useSWR(url, fetcher)

    useEffect(() => {
        setResponse(data)
    }, [data, setResponse])

    return {
        response,
        setUrl,
    }
}
