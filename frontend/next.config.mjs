/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static image imports optimization for model files
  images: {
    disableStaticImages: true,
  },
  // Add model directory to be accessible
  experimental: {
    outputFileTracingRoot: process.cwd(),
    outputFileTracingIncludes: {
      "/**": ["./models/**/*"],
    },
  },
  // Increase API body size limit for image uploads
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
  webpack: (config) => {
    config.externals.push("@tensorflow/tfjs-node");
    return config;
  },
};

export default nextConfig;
