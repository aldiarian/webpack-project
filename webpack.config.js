var path = require("path");
const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const postcss = require('postcss-cssnext');


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.scss$/,
				loader: [
					MiniCSSExtractPlugin.loader,
					"css-loader",
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.hbs$/,
				loader: "handlebars-loader"
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
            options: {
              handlebarsLoader: {}
            }
          }), 
		new HTMLWebpackPlugin({
			template: './src/modulos/index.hbs',
			templateParameters:require('./src/modulos/data/items.json')

		}),
		new MiniCSSExtractPlugin()
	]
};