import useCopy from 'use-copy'
import { useRouter } from 'next/router'

export const CopyLink = (props: { origin: string; className?: string }) => {
    const { origin, className } = props
    const { asPath } = useRouter()
    const [copied, copy, setCopied] = useCopy(`${origin}${asPath}`)

    const copyText = () => {
        copy()

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <>
            {copied ? (
                'Copied!'
            ) : (
                <button className={className} onClick={copyText}>
                    Copy link
                </button>
            )}
        </>
    )
}
