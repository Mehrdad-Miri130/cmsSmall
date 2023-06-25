/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	corePlugins: {
		preflight: false,
	},

	theme: {
		extend: {},
	},

	plugins: [],
};
