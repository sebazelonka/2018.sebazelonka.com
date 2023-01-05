const userConfig = require("./gatsby-config.js.__vercel_builder_backup__.js");

// https://github.com/gatsbyjs/gatsby/blob/354003fb2908e02ff12109ca3a02978a5a6e608c/packages/gatsby/src/bootstrap/prefer-default.ts
const preferDefault = m => (m && m.default) || m;

const vercelConfig = Object.assign(
  {},

  // https://github.com/gatsbyjs/gatsby/blob/a6ecfb2b01d761e8a3612b8ea132c698659923d9/packages/gatsby/src/services/initialize.ts#L113-L117
  preferDefault(userConfig)
);
if (!vercelConfig.plugins) {
  vercelConfig.plugins = [];
}

const hasPlugin = vercelConfig.plugins.find(
  (p) =>
    p && (p === "gatsby-plugin-vercel" || p.resolve === "gatsby-plugin-vercel")
);
if (!hasPlugin) {
  vercelConfig.plugins = vercelConfig.plugins.slice();
  vercelConfig.plugins.push({
    resolve: "gatsby-plugin-vercel",
    options: {},
  });
}

module.exports = vercelConfig;
