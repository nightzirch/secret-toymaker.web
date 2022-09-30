const path = require("path");

module.exports = {
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
