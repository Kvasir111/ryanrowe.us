const ImageminWebP = require('imagemin-webp');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './sw.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './static/images/**/**',
			to: '.staticnpm/images/[name].webp'
		}]),
		new ImageminPlugin({
			// imagemin-webp docs: https://github.com/imagemin/imagemin-webp
			plugins: [ImageminWebP({quality: 50})]
		})
	]
};
