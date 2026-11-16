/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> `out/` is what gets synced to Bunny storage.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
