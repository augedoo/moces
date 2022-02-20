const defaultTheme = require('tailwindcss/defaultTheme');
const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'media', // or 'false' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mulish: ['Mulish', 'sans-serif'],
				zilla: ["'Zilla Slab'", 'serif'],
			},
			colors: {
				primary: {
					50: '#fef2e7',
					100: '#fcd9b6',
					200: '#facc9e',
					300: '#f8b36d',
					400: '#f6993c',
					500: '#F69536',
					600: '#f4800b',
					700: '#c36609',
					800: '#924d07',
					900: '#613305',
				},
				secondary: {
					50: '#d8e8f3',
					100: '#b1d1e7',
					200: '#9ec6e0',
					300: '#77afd4',
					400: '#5198c8',
					500: '#377fae',
					600: '#2b6388',
					700: '#255474',
					800: '#18384e',
					900: '#122a3a',
				},
			},
		},

		['line-clamp']: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
		},

		container: {
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
				lg: '4rem',
				xl: '6rem',
				'2xl': '8rem',
			},
		},

		animation: {
			pulse: 'pulse 1s linear infinite alternate',
		},

		keyframes: {
			pulse: {
				'0%': {
					backgroundColor: 'hsl(200, 20%, 70%)',
				},
				'100%': {
					backgroundColor: 'hsl(200, 20%, 95%)',
				},
			},
		},

		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},

	plugins: [
		plugin(function ({ addUtilities, theme, e }) {
			const rotateUtilities = _.map(theme('line-clamp'), (value, key) => {
				return {
					[`.${e(`line-clamp-${key}`)}`]: {
						display: '-webkit-box',
						['-webkit-line-clamp']: `${value}`,
						['-webkit-box-orient']: 'vertical',
						overflow: 'hidden',
						['text-overflow']: 'ellipsis',
					},
					'.card-shadow': {
						'box-shadow':
							'0 7px 14px 0 rgba(59,65,94,.1),0 3px 6px 0 rgba(0,0,0,.07)',
					},
				};
			});

			addUtilities(rotateUtilities);
		}),
	],
};
