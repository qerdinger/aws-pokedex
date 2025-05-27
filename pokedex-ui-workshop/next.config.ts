import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/pokemon",
        destination: "https://5d202fefp6.execute-api.eu-west-2.amazonaws.com/Prod/pokemon",
      },
      {
        source: "/api/pokemon/:id",
        destination:
          "https://5d202fefp6.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id",
      },
    ];
  },
};

export default nextConfig;
