/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // This tells Next.js to load assets from your repo folder
  basePath: '/tipvogn-hjemmeside', 
  
  // Disables Next.js image optimization (required for static export)
  images: {
    unoptimized: true, 
  },
};

export default nextConfig; // Use `module.exports = nextConfig;` if it's a .js file