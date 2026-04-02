/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // IMPORTANT: basepath must match your repo name
  basePath: '/psychology-of-life', 
};
export default nextConfig;