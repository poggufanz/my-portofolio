/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Configure for GitHub Pages deployment with repository name
  // (only in production builds; dev server stays at /)
  basePath: isProd ? '/my-portofolio' : undefined,
  assetPrefix: isProd ? '/my-portofolio' : undefined,
};

export default nextConfig;
