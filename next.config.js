/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub Pages static hosting
  images: {
    unoptimized: true, // Required for static export; ensures your GIFs and research figures load correctly
  },
}

module.exports = nextConfig
