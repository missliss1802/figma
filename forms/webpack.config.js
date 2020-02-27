const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: PATHS.source + '/index.pug'
		}),
		new ExtractTextPlugin('./css/[name].css'),
		new webpack.ProvidePlugin({
			$: './node_modules/jquery/dist/jquery.min.js',
  			jQuery: './node_modules/jquery/dist/jquery.min.js',
  			
		})
	],
	module: {
		rules: [
		{
			test: /\.pug$/,
			loader: 'pug-loader',
			options: {
				pretty: true
			}
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				publicPath: '../',
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}
		]
	}
}