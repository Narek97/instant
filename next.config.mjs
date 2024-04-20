/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    // Redirect root URL to "/survey"
    async redirects() {
        return [
            {
                source: '/',
                destination: '/surveys',
                permanent: true,
            },
        ];
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
