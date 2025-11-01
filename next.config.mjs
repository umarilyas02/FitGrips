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
          {
            protocol: 'https',
            hostname: 'fitgrips.com', // Replace with your image host
            port: '',
            pathname: '/**', // Allows images from any path on this host
          },
          {
            protocol: 'https',
            hostname: 'utfs.io', // Replace with your image host
            port: '',
            pathname: '/**', // Allows images from any path on this host
          },
            {
              protocol: 'https',
              hostname: 'ts1xw1iyvq.ufs.sh', // Additional ufs.sh subdomain used in Explore
              port: '',
              pathname: '/**',
            },
        ]
      },
};

export default nextConfig;
