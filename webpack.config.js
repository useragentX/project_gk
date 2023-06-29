const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './js/index.js',
	},
	devServer: {
		port: 8000,
	},        
	output: {
		filename: "[name].[hash].js",
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/img/[name].[hash][ext]'
				}
			},
			{
				test: /\.(otf|ttf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'static/fonts/[name].[hash][ext]'
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
		]
	}
}