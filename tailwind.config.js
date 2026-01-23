/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#646cff',
				'primary-hover': '#535bf2',
				bg: '#0f0f11',
				surface: '#1a1a1d',
				'text-muted': '#a1a1aa',
			}
		},
	},
	plugins: [],
}
