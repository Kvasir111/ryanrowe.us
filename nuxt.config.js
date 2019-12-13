import webpack from 'webpack';
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

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
			{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: false,
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
		'nuxt-purgecss',
		'@bazzite/nuxt-optimized-images',
	],
	purgeCSS:{
		mode: 'postcss',
		enabled: 'true', // or `false` when in dev/debug mode
		paths: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js'
		],
		styleExtensions: ['.css'],
		whitelist: ['body', 'html', 'nuxt-progress'],
		extractors: [
			{
				extractor: class {
					static extract(content) {
						return content.match(/[A-z0-9-:\\/]+/g)
					}
				},
				extensions: ['html', 'vue', 'js']
			}
		]
	},
	optimizedImages: {
		inlineImageLimit: -1,
		handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
		optimizeImages: true,
		optimizeImagesInDev: false,
		defaultImageLoader: 'img-loader',
		mozjpeg: {
			quality: 85
		},
		optipng: false,
		pngquant: {
			speed: 7,
			quality: [0.65, 0.8]
		},
		webp: {
			quality: 85
		}
	},
	/*
	** Build configuration
	*/
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js',
			}
		},
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {

		}
	}
}
