/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: '*.notion.so',
        },
    ],
    },
};

export default nextConfig;
