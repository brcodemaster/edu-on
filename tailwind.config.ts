import type { Config } from 'tailwindcss'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		screens: {
			'mobile-sm': '500px',
			mobile: '768px',
			tablet: '1024px',
			desktop: '1150px',
		},
		extend: {
			colors: {
				blue: {
					primary: '#006AFF',
					secondary: '#E7F0FF',
				},
				gray: {
					dark: 'rgba(17, 17, 17, 74%)',
					primary: 'rgba(17, 17, 17, 54%)',
					secondary: 'rgba(17, 17, 17, 4%)',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
