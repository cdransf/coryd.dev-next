import dynamic from 'next/dynamic'
import { Spin } from '@/components/Loading'

const Webmentions = dynamic(() => import('@/components/webmentions/WebmentionsCore'), {
    ssr: false,
    loading: () => <Spin className="my-2 flex justify-center" />,
})

export default Webmentions
