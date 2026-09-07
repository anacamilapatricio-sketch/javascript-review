import  js from '@eslint/js';
import globals from "globals";


export default [
    js.configs.recommended,
    {
        languageOption: {
            ecmaVersion: 2022,
            sourceType: 'module',
            global: {
                ...globals.node
            }
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'off',
        }

    }];