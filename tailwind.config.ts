import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			spacing: {
				header: '4rem'
			},
			colors: {
				hitomi: {
					primary: '#999999',
					secondary: '#cccccc',
					button: '#29313e'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
