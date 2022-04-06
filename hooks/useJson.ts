import { useEffect, useState } from 'react'
import cache from 'memory-cache'

export const useJson = () => {
    const [response, setResponse] = useState<any>({}) // eslint-disable-line @typescript-eslint/no-explicit-any
    const [request, setRequest] = useState<{ url?: string; cacheDuration?: number } | undefined>()

    useEffect(() => {
        if (request) {
            const fetchData = async () => {
                const cachedResponse = cache.get(request.url)
                if (cachedResponse) {
                    setResponse(cachedResponse)
                } else {
                    const resp = await fetch(request.url)
                    const json = await resp.json()
                    if (request.cacheDuration)
                        cache.put(request.url, json, request.cacheDuration * 60000)
                    setResponse(json)
                }
            }
            fetchData()
        }
    }, [setResponse, request])

    return {
        response,
        setRequest,
    }
}
