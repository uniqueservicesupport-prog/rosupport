/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				kent: {
					blue: '#0056A4',   // Main Kent Blue
					dark: '#003B73',   // Dark Blue
					red: '#E31E24',    // Red Button
					light: '#F4F8FB',  // Light Background
					text: '#333333',   // Text Color
				}
			},
		},
	},
	plugins: [],
}