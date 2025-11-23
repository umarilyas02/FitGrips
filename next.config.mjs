/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'te6fm7preu.ufs.sh', 
            port: '',
            pathname: '/**', // Allows images from any path on this host
          },
          {
            protocol: 'https',
            hostname: 'fitgrips.com', 
            port: '',
            pathname: '/**', 
          },
          {
            protocol: 'https',
            hostname: 'utfs.io', 
            port: '',
            pathname: '/**', 
          },
            {
              protocol: 'https',
              hostname: 'ts1xw1iyvq.ufs.sh', // Additional ufs.sh subdomain used in Explore
              port: '',
              pathname: '/**',
            },
        ],
        qualities: [75, 90 , 100]
      },
};

export default nextConfig;
