/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn.discordapp.com",
      "cdn.discordapp.com/app-assets/",
      "i.imgur.com",
      "media.tenor.com",
      "i.scdn.co",
      "avatars.githubusercontent.com",
    ]
  },
}

export default nextConfig
