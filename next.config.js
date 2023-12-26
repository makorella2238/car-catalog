/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL
    },
    // async redirects() {
    //     return [
    //         {
    //            относительно нашего пути куда перенаправлять
    //            source: '/images/:path*' ,
    //             откуда перенаправлять на наш путь
    //             destination: ''
    //         }
    //     ]
    // }
}

module.exports = nextConfig
