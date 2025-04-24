/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
