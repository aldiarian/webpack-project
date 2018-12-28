var path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	module: {
		rules: [
			{
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
					'sass-loader'
				]
			  }
		]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html', 
            template: './src/index.html',
		}),
		new MiniCSSExtractPlugin()
    ]
};
