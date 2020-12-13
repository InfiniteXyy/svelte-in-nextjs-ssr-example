const SveltePreprocess = require("svelte-preprocess");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.svelte$/,
      use: {
        loader: "svelte-loader",
        options: {
          emitCss: true,
          preprocess: SveltePreprocess(),
          hydratable: true,
          generate: isServer ? "ssr" : "",
          dev,
        },
      },
    });

    config.resolve.extensions.push(".svelte");

    // Important: return the modified config
    return config;
  },
};
