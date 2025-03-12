import { defineConfig } from "eslint/config"
import stylistic from "@stylistic/eslint-plugin"
import stylisticJs from "@stylistic/eslint-plugin-js"
import stylisticJsx from "@stylistic/eslint-plugin-jsx"
import stylisticTs from "@stylistic/eslint-plugin-ts"

export default defineConfig( [
    {
        files : [
            "src/*"
        ],
        ignores: [
            "node_modules",
            "coverage"
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