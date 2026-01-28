import type { NextConfig } from "next";

/** @type {import('next-sitemap').IConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: `/roof`,
  generateRobotsTxt: true,
};

export default nextConfig;
