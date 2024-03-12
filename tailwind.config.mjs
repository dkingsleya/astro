import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: 0
					},
					'25%': {
						opacity: 0.25
					},
					'50%': {
						opacity: 0.5
					},
					'75%': {
						opacity: 0.75
					},
					'100%': {
						opacity: 1
					}
				}
			}, animation: {
				'fade-in': 'fadeIn 1.5s ease-in',
				'fade-in-slow': 'fadeIn 6s ease-in'
			}
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value,
					}),
				},
				{ values: theme('transitionDelay') }
			)
		}),
	],
}
