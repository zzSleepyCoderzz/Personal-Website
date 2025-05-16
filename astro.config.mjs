// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://zzsleepycoderzz.github.io/',
    base: '/Personal-Website',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
});