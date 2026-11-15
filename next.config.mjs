/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static HTML files for GitHub Pages
  output: 'export',

  // Generate /about/index.html instead of /about.html
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  // GitHub Pages cannot run Next.js image optimization
  images: {
    unoptimized: true,
  },
}

export default nextConfig