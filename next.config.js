const path = require("path");

module.exports = {
  env: {
    USE_LOCAL_FUNCTIONS: process.env.USE_LOCAL_FUNCTIONS,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/__/:path*",
        destination: `https://${process.env.AUTH_DOMAIN}/__/:path*`,
        permanent: false,
      },
    ];
  },
};
