/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import Image from 'next/image'
import TOCInline from './TOCInline'
import Pre from './Pre'
import Paste from './omg/Paste'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
}

export const MDXComponents: ComponentMap = {
    Image,
    //@ts-ignore
    TOCInline,
    pre: Pre,
    wrapper: Wrapper,
    Paste,
    //@ts-ignore
}

interface Props {
    layout: string
    mdxSource: string
    [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

    return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
