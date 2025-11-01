/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'te6fm7preu.ufs.sh', // Replace with your image host
            port: '',
            pathname: '/**', // Allows images from any path on this host
          },
        ],
      },
};

export default nextConfig;
