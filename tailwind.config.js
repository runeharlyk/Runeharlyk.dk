/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			transitionProperty: {
				height: 'height'
			},
			colors: {
				content: 'hsl(var(--color-text) / <alpha-value>)',
				bg: 'hsl(var(--color-bg) / <alpha-value>)'
			}
		}
	},
	plugins: []
};

