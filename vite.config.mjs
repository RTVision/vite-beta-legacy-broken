import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig(({ mode }) => {
  return {
    build: {
      assetsDir: "static",
      emptyOutDir: true,
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    plugins: [
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    publicDir: "./src/assets/",
    server: {
      host: true,
      port: 8088,
      hmr: {
        clientPort: 443,
      },
    },
  };
});
