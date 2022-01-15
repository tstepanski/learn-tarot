import * as path from "path";
import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

let htmlWebpackPlugin = new HtmlWebpackPlugin({
	cache: true,
	inject: "body",
	minify: true,
	title: "Learn Tarot"
});

const config: Configuration = {
	mode: "production",
	entry: path.resolve(__dirname, "src", "Loader.ts"),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "learn-tarot.js"
	},
	plugins: [
		htmlWebpackPlugin
	]
};

// noinspection JSUnusedGlobalSymbols
export default config;
