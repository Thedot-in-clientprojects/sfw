/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    images: {
        deviceSizes: [360, 480, 576, 768, 1200, 1920, 2048, 3840],
        domains: ['firebasestorage.googleapis.com'],
        loader: 'akamai',
        path: '/',
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;