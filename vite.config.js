// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // keep if you already added it
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
