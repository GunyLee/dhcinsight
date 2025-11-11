module.exports = {
  images: {
    domains: [
      'localhost',
      "developers.google.com",
      "lh3.googleusercontent.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com"
    ],
  },
  experimental: {
    scrollRestoration: true,
     outputFileTracingRoot: __dirname,
  },
  env: {
    UPSTAGE_API_KEY: process.env.UPSTAGE_API_KEY,
  },
};
