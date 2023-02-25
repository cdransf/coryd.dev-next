import Link from 'next/link'

const BlogSearch = () => {
    return (
        <Link href="/blog" passHref className="mx-2 text-sm md:mx-3" title="Blog search">
            <svg
                className="h-5 w-5 text-gray-700 hover:text-purple-500 dark:text-gray-200 dark:hover:text-purple-400"
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
