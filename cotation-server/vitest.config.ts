import {defineConfig} from "vitest/config";
import path from "path";

export default defineConfig({
    test:{
        globals:true,
        environment:'node',
        include:["src/tests/**/*.test.ts"],
            coverage: {
                provider: "v8",
                reporter: ['text' , 'html'],
                thresholds:{
                    lines:60,
                    functions:60
                }
            },
            setupFiles:['./src/tests/setup.ts']
    },
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, './src')  // Pour les imports @/
        },
    },
});