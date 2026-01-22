/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/heat-pump-installation-cost-uk',
        destination: '/blog/air-source-heat-pump-cost-uk',
        permanent: true, // 301 redirect
      },
    ]
  },
}

export default nextConfig
