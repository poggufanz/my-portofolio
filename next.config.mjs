/** @type {import('next').NextConfig} */
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
  basePath: '/my-portofolio',
  assetPrefix: '/my-portofolio',
};

export default nextConfig;
