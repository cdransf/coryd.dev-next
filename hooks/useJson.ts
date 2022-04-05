import { useEffect, useState } from 'react'

export const useJson = () => {
    const [response, setResponse] = useState<any>({}) // eslint-disable-line @typescript-eslint/no-explicit-any
    const [url, setUrl] = useState<string | undefined>()

    useEffect(() => {
        if (url) {
            const fetchData = async () => {
                const resp = await fetch(url)
                const json = await resp.json()
                setResponse(json)
            }

            fetchData()
        }
    }, [setResponse, url])

    return {
        response,
        setUrl,
    }
}
