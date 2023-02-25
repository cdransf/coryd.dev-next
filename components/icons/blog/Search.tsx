import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
    return (
        <Link href="/blog" passHref className="mx-2 text-sm md:mx-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-700 hover:text-purple-500 dark:text-gray-200 dark:hover:text-purple-400" />
        </Link>
    )
}

export default Search
