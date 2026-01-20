import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,  // Helps with static hosting
    images: {
        unoptimized: true,  // Required for static exports
    },
    // Ensure static files are properly copied
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://federicoraponi.it' : '',
};

export default nextConfig;
