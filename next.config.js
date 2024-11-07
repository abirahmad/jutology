// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = {
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  reactStrictMode: true,
  generateEtags: true,
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate", // Disable caching
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.jutology.com",
        port: "8000", // Add the port if needed
        pathname: "/images/**", // Allow specific paths or adjust as per your need
      },
    ],
    domains: ["api.jutology.com", "127.0.0.1"],
  },
  // Removed: output: 'export',
};
