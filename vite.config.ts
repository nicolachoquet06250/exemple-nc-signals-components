import {defineConfig} from "vite";
import {autoComponentsPlugin} from 'nc-signals-components/vite'

export default defineConfig({
    server: {
        port: 5174,
    },
    build: {
        manifest: true,
        rolldownOptions: {
            input: "src/entry-client.ts",
        },
    },
    plugins: [autoComponentsPlugin()]
})