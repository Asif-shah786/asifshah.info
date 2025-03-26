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
            'imagizer.imageshack.com',
            'cdn.contentful.com',
            'images.ctfassets.net'
        ],
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
};

module.exports = nextConfig;
