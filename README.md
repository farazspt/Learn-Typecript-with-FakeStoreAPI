create vite project >> "npm create vite@latest"

install plugin checker >> "npm install vite-plugin-checker"

create file vite.config.ts on root project then copy code below

import { defineConfig } from 'vite';
    import checker from 'vite-plugin-checker';

    export default defineConfig({
    plugins: [
        checker({ typescript: true }),
    ],
    });
