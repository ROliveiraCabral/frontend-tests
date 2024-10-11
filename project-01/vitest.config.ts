/// <reference types="vitest"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    include: ["src/**/*.spec.tsx", "src/**/*.spec.ts"],
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "./src"
        ),
      },
    ],
  },
});
