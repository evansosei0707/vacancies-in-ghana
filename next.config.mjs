/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http://localhost:3000', 'www.google.com', 'en.facebookbrand.com', 'encrypted-tbn0.gstatic.com'], // Add other domains if needed
        loader: 'default', // Specify the loader type if needed
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
          },
        ],
      },
    };
    

export default nextConfig;
