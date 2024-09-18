// import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            port: '',
            pathname: '/api/**'
          },
          {
            protocol:'https',
            hostname:'terra-segara-asset.s3.ap-southeast-2.amazonaws.com',
            port: '',
            pathname: '/**'
          },
          {
            protocol:'https',
            hostname:'picsum.photos',
            port: '',
            pathname: '/**'
          }
        ],
      },
};

export default nextConfig;
