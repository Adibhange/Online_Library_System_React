/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(2, 153, 255)",
				"primary-content": "rgb(255, 255, 255)",
				"primary-dark": "rgb(0, 123, 206)",
				"primary-light": "rgb(53, 174, 255)",

				background: "rgb(240, 240, 240)",
				foreground: "rgb(251, 251, 251)",
				border: "rgb(223, 223, 223)",

				copy: "rgb(38, 38, 38)",
				"copy-light": "rgb(102, 102, 102)",
				"copy-lighter": "rgb(140, 140, 140)",
			},
		},
	},
	plugins: [],
};
