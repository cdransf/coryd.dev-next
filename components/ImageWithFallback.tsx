import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const env = process.env.NODE_ENV
let host = siteMetadata.siteUrl
if (env === 'development') host = 'http://localhost:3000'

const fallbackImage = `${host}/media/404.jpg`
const placeholderImage = `${host}/media/placeholder.jpg`

const ImageWithFallback = ({ fallback = fallbackImage, alt, src, ...props }) => {
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
    }, [src])

    return (
        <Image
            alt={alt}
            onError={setError}
            src={error ? fallback : src}
            placeholder="blur"
            blurDataURL={placeholderImage}
            {...props}
        />
    )
}

export default ImageWithFallback
