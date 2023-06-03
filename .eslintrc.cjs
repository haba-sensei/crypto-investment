// module.exports = {
//     env: {
//         browser: true,
//         es2021: true,
//     },
//     extends: [
//         'plugin:react/recommended',
//         'standard-with-typescript',
//         'plugin:jsx-a11y/recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:import/typescript',
//         'plugin:react/jsx-runtime',
//         'plugin:prettier/recommended',
//         'prettier',
//     ],
//     overrides: [
//         {
//             files: ['./vite.config.ts'],
//         },
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: {
//             jsx: true,
//         },
//         sourceType: 'module',
//         // project: ['./tsconfig.json'],
//         // Error: Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which requires parserServices to be generated.
//     },
//     plugins: [
//         'react',
//         '@typescript-eslint',
//         'import',
//         'jsx-a11y',
//         'react-hooks',
//         'prettier',
//     ],
//     rules: {
//         'no-shadow': 'warn',
//         'dot-notation': 'off',
//         '@typescript-eslint/dot-notation': 'off',
//         '@typescript-eslint/no-throw-literal': 'off',
//         '@typescript-eslint/await-thenable': 'off',
//         '@typescript-eslint/consistent-type-exports': 'off',
//         'at-rule-no-unknown': 0,
//         camelcase: [
//             'error',
//             {
//                 properties: 'never',
//             },
//         ],
//         '@typescript-eslint/no-explicit-any': 'off',
//         '@typescript-eslint/no-non-null-assertion': 'off',
//         '@typescript-eslint/no-unused-vars': [
//             'warn',
//             {
//                 argsIgnorePattern: '^_',
//                 varsIgnorePattern: '^_',
//                 caughtErrorsIgnorePattern: '^_',
//             },
//         ],
//         'react-hooks/rules-of-hooks': 'error',
//         'react-hooks/exhaustive-deps': 'warn',
//         'prettier/prettier': [
//             'warn',
//             {
//                 endOfLine: 'auto',
//                 singleQuote: true,
//             },
//         ],
//     },
// };
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended", // Make sure this is always the last element in the array.
    ],
    plugins: ["simple-import-sort", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {},
            {
                usePrettierrc: true,
            },
        ],
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/accessible-emoji": "off",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
    },
};
