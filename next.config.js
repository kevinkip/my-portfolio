/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap'
            }
        ]
    },
    images: {
        domains: [
            "raw.githubusercontent.com"
        ]
    },
    compiler: {
        styledComponents: true
    },
}

module.exports = nextConfig
