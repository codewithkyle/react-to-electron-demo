const path = require('path');

const basePath = path.join(__dirname, 'src');

module.exports = {
	entry: {
		shop: path.join(basePath, 'index.tsx'),
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] },
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'ts-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
	output: {
		filename: 'app.js',
		path: path.join(__dirname, 'dist'),
	},
};
