import { defineConfig, globalIgnores } from "eslint/config"
import stylisticTs from "@stylistic/eslint-plugin-ts"
import stylisticJs from "@stylistic/eslint-plugin-js"
import stylistic from "@stylistic/eslint-plugin"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"
import js from "@eslint/js"

export default defineConfig( [
    {
        files: [
            "src/**/*.js"
        ] 
    },
    globalIgnores([
        "*.config.js",
        "coverage/**/*",
        "node_modules/**/*"
    ]),
    {
        plugins: {
            js: js 
        },
        extends: [
            "js/recommended"
        ] 
    },
    {
        plugins: {
            "@stylistic/jsx": stylisticJsx,
            "@stylistic/ts": stylisticTs,
            "@stylistic" : stylistic,
            "@stylistic/js": stylisticJs 
        },
        rules : {
            "@stylistic/semi": [
                "error",
                "always" 
            ],
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    allowTemplateLiterals: "always",
                    avoidEscape : true 
                } 
            ],
            "@stylistic/indent": [
                "error",
                4,
                {
                    FunctionExpression : {},
                    CallExpression : {},
                    FunctionDeclaration: {
                        body : 2,
                        parameters: 3 
                    },
                    SwitchCase : 5 
                } 
            ] 
        } 
    } 
] )