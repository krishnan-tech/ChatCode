// @ts-ignore
const webpack = require("./node_modules/webpack");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new webpack.ContextReplacementPlugin(
      /\/peerjs\//,
      (data: { dependencies: { critical: any }[] }) => {
        delete data.dependencies[0].critical;
        return data;
      }
    )
  );

  return config;
};
