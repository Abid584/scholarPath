import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "force-exit-after-build",
      apply: "build",
      closeBundle() {
        // Force the process to exit after building, ensuring Vercel doesn't hang
        setTimeout(() => {
          process.exit(0);
        }, 1000);
      },
    },
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("firebase")) {
              return "vendor-firebase";
            }
            if (id.includes("recharts") || id.includes("d3")) {
              return "vendor-recharts";
            }
            if (id.includes("swiper")) {
              return "vendor-swiper";
            }
            if (id.includes("lucide-react") || id.includes("react-icons")) {
              return "vendor-icons";
            }
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "vendor-react-core";
            }
            return "vendor-libs";
          }
        },
      },
    },
  },
});

