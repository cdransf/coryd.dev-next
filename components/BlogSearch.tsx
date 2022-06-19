import Link from '@/components/Link'

const BlogSearch = () => {
    return (
        <Link href="/blog">
            <svg
                className="ml-1 mr-1 h-7 w-7 p-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </Link>
    )
}

export default BlogSearch
