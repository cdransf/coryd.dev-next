/* eslint-disable @next/next/no-html-link-for-pages */
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div
                    className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6"
                    style={{ height: '70vh' }}
                >
                    <div className="space-x-2 pt-6 pb-8 md:space-y-5">
                        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                            Error
                        </h1>
                    </div>
                    <div className="max-w-md">
                        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                            Sorry, something's broken.
                        </p>
                        <p className="mb-8">But, hopefully, the home page isn't.</p>
                        <a href="/">
                            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
                                Back to homepage
                            </button>
                        </a>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
