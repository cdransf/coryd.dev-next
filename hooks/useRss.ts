import { read } from 'feed-reader'
import { useEffect, useState } from 'react'
import cache from 'memory-cache'

export const useRss = () => {
    const [response, setResponse] = useState([])
    const [request, setRequest] = useState<{ url?: string; cacheDuration?: number } | undefined>()

    useEffect(() => {
        if (request) {
            const fetchData = async () => {
                const cachedResponse = cache.get(request.url)
                if (cachedResponse) {
                    setResponse(cachedResponse)
                } else {
                    read(request.url)
                        .then((res) => {
                            if (request.cacheDuration)
                                cache.put(request.url, res.entries, request.cacheDuration * 60000)
                            setResponse(res.entries)
                        })
                        .catch()
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
