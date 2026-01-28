import type { NextConfig } from "next";

/** @type {import('next-sitemap').IConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  siteUrl: process.env.SITE_URL || "https://example.com",
  generateRobotsTxt: true,
};

export default nextConfig;
