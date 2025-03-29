/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'unsplash.com',
            'images.unsplash.com',
            'github.com',
            'raw.githubusercontent.com',
            'avatars.githubusercontent.com',
            'user-images.githubusercontent.com',
            'play-lh.googleusercontent.com',
            'imagizer.imageshack.com',
            'cdn.contentful.com',
            'images.ctfassets.net',
            'www.upwork.com'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.upwork.com',
                pathname: '/att/download/**',
            }
        ],
        unoptimized: true
    },
    webpack: (config) => {
        // camel-case style names from css modules
        config.module.rules
            .find(({ oneOf }) => !!oneOf)
            .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
            .forEach(({ use }) => {
                if (use) {
                    const [, cssLoader] = use;
                    if (cssLoader.options) {
                        cssLoader.options.modules = {
                            ...cssLoader.options.modules,
                            exportLocalsConvention: 'camelCase',
                        };
                    }
                }
            });

        return config;
    },
    eslint: {
        ignoreDuringBuilds: true, // ← Add this
    },
};

module.exports = nextConfig;
