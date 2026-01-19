import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    server: {
    host: '0.0.0.0',
    port: 4321
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
        allowedHosts: [
        'it-mty.ddns.net',
        'localhost',
        '192.168.1.91'
        ]
    }
},
    integrations: [react()]
});
