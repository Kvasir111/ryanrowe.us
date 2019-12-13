// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
	theme: {
		extend: {
			fontsize:{
				'7xl': '5rem',
				'8xl': '6rem',
			},
			fontFamily:{

			},
			colors:{
				nuBlack: '#1a1a1d',
				nuGrey: '#4e4e50',
				nuPinkDark: '#6f2232',
				nuPink: '#950740',
				nuPinkLight: '#c3073f'

			},
		}
	},
	variants: {
		objectFit: ['responsive', 'hover', 'focus'],
		shadow: ['responsive', 'hover', 'focus'],
	}
}
