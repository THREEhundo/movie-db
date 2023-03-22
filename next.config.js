/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		domains: ['image.tmdb.org', 'via.placeholder.com']
	},
	reactStrictMode: false
}

module.exports = nextConfig
