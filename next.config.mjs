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
  
  // No base path needed for standard GitHub Pages
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
