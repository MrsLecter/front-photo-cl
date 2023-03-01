import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@hooks": path.resolve(__dirname, "src/components/hooks"),
      "@common": path.resolve(__dirname, "src/components/common"),
      "@wrappers": path.resolve(__dirname, "src/components/wrappers"),
      "@buttons": path.resolve(__dirname, "src/components/common/buttons"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@const": path.resolve(__dirname, "src/constants.ts"),
    },
  },
});
