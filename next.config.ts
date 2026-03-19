import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/strata-timejuggle",
  images: { unoptimized: true },
};

export default nextConfig;
