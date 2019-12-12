
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: "Ryan Rowe" || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#b71c1c' },
	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/tailwind.css'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/pwa',
	],
	/*
	** Build configuration
	*/
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js'
			}
		},
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
