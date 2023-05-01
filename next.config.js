/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "authentication-app-back-end.up.railway.app",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/wp/**",
      },
    ],
  },
};

module.exports = nextConfig;
