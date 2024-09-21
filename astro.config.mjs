// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://coihsan.vercel.app/" ,
    integrations: [
        tailwind(), 
        icon({
            iconDir: "src/assets/icons"
        }),
    ],
    output: 'server',
    // adapter: nodejs({ mode: 'standalone' }),
});