import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  },
  async redirects() {
    return [
      // Old "catalogue coming soon" page → tyre size finder
      { source: "/tyres", destination: "/car-tyres", permanent: true },
      // Alloy wheels moved from /services to their own section
      { source: "/services/alloy-wheels", destination: "/alloy-wheels", permanent: true },
      // Brands no longer stocked
      { source: "/brands/goodyear", destination: "/brands", permanent: true },
      { source: "/brands/bkt", destination: "/brands", permanent: true }
    ];
  }
};

export default nextConfig;
