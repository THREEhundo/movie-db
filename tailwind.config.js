/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				jetBrainsMono: ['var(--font-jetBrainsMono)']
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit,minmax(15rem,1fr))'
			}
		}
	},
	plugins: [require('flowbite/plugin'), require('daisyui')]
}
