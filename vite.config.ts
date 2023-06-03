import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";
import removeConsole from "vite-plugin-remove-console";
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
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
            "@application": path.resolve(__dirname, "./src/application"),
            "@domain": path.resolve(__dirname, "./src/domain"),
            "@infrastructure": path.resolve(__dirname, "./src/infrastructure"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@interfaces": path.resolve(__dirname, "./src/interfaces"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@ui": path.resolve(__dirname, "./src/ui"),
            "@assets": path.resolve(__dirname, "./src/ui/assets"),
            "@components": path.resolve(__dirname, "./src/ui/components"),
            "@componentsGlobal": path.resolve(
                __dirname,
                "./src/ui/components/componentsGlobal"
            ),
            "@views": path.resolve(__dirname, "./src/ui/views"),
            "@shared": path.resolve(__dirname, "./src/ui/components/shared"),
            "@containers": path.resolve(
                __dirname,
                "./src/ui/components/shared/containers"
            ),
            "@generals": path.resolve(
                __dirname,
                "./src/ui/components/shared/generals"
            ),
            "@layout": path.resolve(__dirname, "./src/ui/components/layout"),
            "@plugins": path.resolve(__dirname, "./src/ui/components/plugins"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@icons": path.resolve(__dirname, "./src/ui/components/icons"),
            "@scss": path.resolve(__dirname, "./src/ui/assets/scss"),
            "@css": path.resolve(__dirname, "./src/ui/assets/styles"),
            "@imgs": path.resolve(__dirname, "./src/ui/assets/imgs"),
            "@helpers": path.resolve(__dirname, "./src/helpers"),
        },
    },
});
