import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out',
            },
            transitionDuration: {
                DEFAULT: '600ms',
            },
            // keyframes: {
            //     fadeIn: {
            //         from: {
            //             opacity: 0,
            //             transform: 'translateY(50px)',
            //         },
            //         to: {
            //             opacity: 1,
            //             transform: 'translateY(0)',
            //         },
            //     },
            // },
            // animation: {
            //     fade: 'fadeIn .5s ease-in-out',
            // },
        },
    },
    plugins: [],
};

export default config;