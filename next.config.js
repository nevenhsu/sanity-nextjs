/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const compiler = isProd ? { removeConsole: true } : {};

const nextConfig = {
  compiler
};

module.exports = nextConfig;
