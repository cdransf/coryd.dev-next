import dynamic from 'next/dynamic'

const Webmentions = dynamic(() => import('@/components/webmentions/WebmentionsCore'), {
    ssr: false,
})

export default Webmentions
