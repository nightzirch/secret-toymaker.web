/* eslint-disable import/no-extraneous-dependencies */

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const path = require("path");

/**
 * For some reason, the lines below makes it possible to import styling from node_modules.
 * https://github.com/zeit/next-plugins/issues/267#issuecomment-436454048
 */
if (typeof require !== "undefined") {
  require.extensions[".scss"] = () => { };
  require.extensions[".css"] = file => { };
}

module.exports = {
  ...withCSS(
    {
    cssLoaderOptions: {
      url: false
    },
    ...withSass({
      webpack(config, options) {
        config.module.rules.push(
          {
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
            use: [
              {
                loader: "file-loader"
              }
            ]
          }
        );
        
        return config;
      }
    })
  })
};
