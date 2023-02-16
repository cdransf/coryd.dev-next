// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const dracula = require('tailwind-dracula/colors')

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
        './layouts/**/*.tsx',
        './lib/**/*.ts',
        './data/**/*.mdx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            spacing: {
                '9/16': '56.25%',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ...dracula,
                primary: dracula.purple,
                //@ts-ignore
                gray: colors.neutral, // TODO: Remove ts-ignore after tw types gets updated to v3
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.600')} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.900'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.900'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.900'),
                        },
                        pre: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        code: {
                            color: theme('colors.purple.500'),
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        details: {
                            backgroundColor: theme('colors.gray.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        hr: { borderColor: theme('colors.gray.200') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.gray.500'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.gray.500'),
                        },
                        strong: { color: theme('colors.gray.600') },
                        blockquote: {
                            color: theme('colors.gray.900'),
                            borderLeftColor: theme('colors.gray.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.400')} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.gray.100'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.gray.100'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                        pre: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        code: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        details: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.gray.400'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.gray.400'),
                        },
                        strong: { color: theme('colors.gray.100') },
                        thead: {
                            th: {
                                color: theme('colors.gray.100'),
                            },
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                        blockquote: {
                            color: theme('colors.gray.100'),
                            borderLeftColor: theme('colors.gray.700'),
                        },
                    },
                },
            }),
            animation: {
                'waving-hand': 'wave 2s linear',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwind-dracula')('dracula'),
    ],
}
