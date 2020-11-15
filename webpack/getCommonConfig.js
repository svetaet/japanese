const { EnvironmentPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
require('dotenv').config()

const { paths } = require('./paths')

module.exports = (env, argv) => {
	const plugins = [
		new ESLintPlugin({
			fix: true,
			emitError: true,
			emitWarning: true,
			extensions: ['js', 'json', 'ts', 'tsx'],
		}),
		new CleanWebpackPlugin(),
		new EnvironmentPlugin({ DOCKERIZING: null, RUNNING_LOCALLY: false }),
	]
	const mode = (process.env.NODE_ENV = argv.mode || 'production')

	// if (mode === 'development') plugins.push(new CleanTerminalPlugin({ beforeCompile: true }))
	return {
		mode,
		stats: 'minimal',
		plugins,
		module: {
			rules: [
				{
					test: /\.(ts|tsx|js|json)$/,
					include: paths.src,
					use: 'babel-loader',
				},
			],
		},
		resolve: {
			modules: ['node_modules', 'src', 'src/client', 'src/server'],
			extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
		},
	}
}
