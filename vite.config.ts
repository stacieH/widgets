import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import path from "path";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({ relativeCSSInjection: true }),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Widgets",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },
});
