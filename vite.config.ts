import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
    plugins: [
        react(),
        removeConsole(),
        viteCompression(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
        //tsconfigPaths()
    ],
    build: { sourcemap: false, minify: "esbuild" },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@assets": path.resolve(__dirname, "./src/ui/assets"),
            "@components": path.resolve(__dirname, "./src/ui/components"),
        },
    },
});
