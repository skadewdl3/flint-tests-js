import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylistic from '@stylistic/eslint-plugin';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';

export default [{
  plugins: {
    "@stylistic/jsx": stylisticJsx,
    "@stylistic/ts": stylisticTs,
    "@stylistic": stylistic,
    "@stylistic/js": stylisticJs,
  },
  rules: {
    "@stylistic/indent": [
      "error",
      4,
      {
        "SwitchCase": 5,
        "CallExpression": {
      },
        "FunctionDeclaration": {
        "parameters": 3,
        "body": 2,
      },
        "FunctionExpression": {
      },
      }
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": "always",
        "avoidEscape": true,
      }
    ],
    "@stylistic/semi": [
      "error",
      "always"
    ],
}
}];