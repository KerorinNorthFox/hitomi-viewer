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
				},
				bg: {
					dark: '#424242',
					light: '#efefef'
				},
				header: {
					dark: '#313131'
				},
				footer: {
					dark: '#545454'
				},
				text: {
					dark: '#efefef',
					light: '#121212'
				},
				hover: 'rgba(100, 100, 100, 0.2)',
				transitionDuration: {
					'bg-change': '500ms'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
