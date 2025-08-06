import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    cors: true,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "plugin_a",
      exposes: {
        "./Manifest": "./src/plugin/create-module-federation",
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
