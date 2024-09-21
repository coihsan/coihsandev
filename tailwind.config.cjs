import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) =>({
				DEFAULT:{
					css:{
						width: '100%',
						maxWidth: '100%',
						color: '#f4f4f5',
						a:{
							color: '#fafafa',
							'&:hover':{
								color: '#fafafa',
							},
							textDecoration: "none",
						},
						h1:{
							color: '#fafafa',
						},
						h2:{
							color: '#fafafa',
						},
						h3:{
							color: '#fafafa',
						},
						h4:{
							color: '#fafafa',
						},
						h5:{
							color: '#fafafa',
						},
						h6:{
							color: '#fafafa',
						},
					}
				}
			}),
			width: {
				96: '24rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addComponents, theme }) {
			addComponents({
			});
		  },
	],
};
