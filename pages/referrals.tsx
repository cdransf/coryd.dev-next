import * as Fathom from 'fathom-client'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Referrals() {
    return (
        <>
            <PageSEO
                title={`Referrals - ${siteMetadata.author}`}
                description={siteMetadata.description.referrals}
            />
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Referrals
                    </h1>
                </div>
                <div className="py-12">
                    <p className="mb-5 text-lg leading-7 text-gray-500 dark:text-gray-100">
                        {siteMetadata.description.referrals}
                    </p>
                    <ul className="list-inside list-disc pl-5 md:pl-10">
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://referworkspace.app.goo.gl/7BYo"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('EWREAPNX', 0)
                                }}
                            >
                                Google Workspace
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://savvycal.com/?r=coryd"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('UXTCQANC', 0)
                                }}
                            >
                                SavvyCal
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://usefathom.com/ref/EGXCON"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('RQEGF0WP', 0)
                                }}
                            >
                                Fathom Analytics
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://nextdns.io/?from=m56mt3z6"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('CG4FNTCN', 0)
                                }}
                            >
                                NextDNS
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://dnsimple.com/r/3a7cbb9e15df8f"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('MFQVXQQ9', 0)
                                }}
                            >
                                DNSimple
                            </Link>
                        </li>
                        <li className="mt-1.5 mb-2">
                            <Link
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                href="https://m.do.co/c/3635bf99aee2"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    Fathom.trackGoal('YQQCW9LE', 0)
                                }}
                            >
                                DigitalOcean
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
