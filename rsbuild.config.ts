import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3001,
  },
  html: {
    title: "Plugin-a",
  },
  output: {
    assetPrefix: "https://onlylonger.github.io/rspack-mf-mf-plugin/",
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "plugin_a",
      exposes: {
        "./Manifest": "./src/plugin/create-plugin",
      },
      filename: "remoteEntry.js",
      shared: {
        "@emotion/react": {
          singleton: true,
        },
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router": {
          singleton: true,
        },
      },
    }),
  ],
});
