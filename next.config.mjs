/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
        protocol: "https",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
