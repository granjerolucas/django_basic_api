import { defineConfig } from "@farmfe/core";

export default defineConfig({
  // Options related to the compilation
  compilation: {
    input: {
      // can be a relative path or an absolute path
      index: "./index.html",
    },
    output: {
      path: "./build",
      publicPath: "/static/",
    },
    // ...
  },
  // Options related to the dev server
  server: {
    port: 9000,
    // ...
  },
  // Additional plugins
  plugins: ['@farmfe/plugin-react']

});