import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		languageOptions: {
			ecmaVersion: 12,
			sourceType : 'module',
			globals    : globals.browser,
		},
	},
	pluginJs.configs.recommended,
	eslintPluginPrettierRecommended,
	{
		rules: {
			indent: ['error', 2],
			quotes: ['error', 'single'],
			semi  : ['error', 'always'],
		},
	},
];
