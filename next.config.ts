import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**", // aceita qualquer caminho dentro do utfs.io
      },
    ],
  },
}

export default nextConfig
