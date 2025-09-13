const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    fallbacks: {
        document: '/offline',
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : 
        [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname : "avatars.githubusercontent.com",
            },
            {
                hostname : "lh3.googleusercontent.com",
            },
        ]
    }
}

module.exports = withPWA(nextConfig)
