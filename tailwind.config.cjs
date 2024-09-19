/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				96: '24rem',
			},
		},
	},
	plugins: [],
};
