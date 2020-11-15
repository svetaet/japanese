const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UnusedWebpackPlugin = require('unused-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const { paths } = require('./paths')
const { InlineChunkHtmlPlugin } = require('./plugins/InlineChunkHtmlPlugin')
const { DeleteFilesPlugin } = require('./plugins/DeleteFilesPlugin')

const getClassNameHash = require('./getClassNameHash')
const getCommonConfig = require('./getCommonConfig')

const devConfig = {
	target: 'web',
	devtool: 'eval-source-map',
	devServer: {
		publicPath: '/',
		contentBase: paths.client.output,
		stats: 'minimal',
		hot: true,
		historyApiFallback: true,
		port: 3001,
	},
	resolve: { alias: { 'react-dom': '@hot-loader/react-dom' } },
}

const prodConfig = {
	devtool: 'source-map',
	output: {
		path: paths.client.output,
		filename: '[name].[contenthash:4].js',
		chunkFilename: '[name].[contenthash:4].js',
		publicPath: './',
	},
	plugins: [
		// Inline webpack runtime in html
		// In fact you could inline any small code snippet you don't need to cache to spare an extra server connection
		new InlineChunkHtmlPlugin(HtmlPlugin, [/^runtime.*js$/]),

		// Preload font
		new PreloadWebpackPlugin({ include: 'allAssets', fileBlacklist: [/\.js/, /\.css/] }),

		// Gzip compression
		// new CompressionPlugin({ test: /\.(js|css)$/, deleteOriginalAssets: false }),

		// Minify and terminate duplication for css file
		new MiniCssExtractPlugin({ filename: '[name].[contenthash:4].css', chunkFilename: '[id].[contenthash:4].css' }),
		new CssMinimizerPlugin(),

		// Anallyze bundle size
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			reportFilename: '../bundle_size.html',
			openAnalyzer: false,
			logLevel: 'silent',
		}),

		// Delete uncompressed assets after them being inspected by BundleAnalyzerPlugin
		// new DeleteFilesPlugin({ test: /\.(js|css)$/, dir: paths.client.output }),
	],
	optimization: {
		usedExports: true,
		minimize: true,
		minimizer: [new TerserPlugin()],
		runtimeChunk: 'single',
		moduleIds: 'named',
		chunkIds: 'named',
		splitChunks: {
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	resolve: { alias: { react: 'preact/compat', 'react-dom': 'preact/compat' } },
}

module.exports = (env, argv) => {
	const commonConfig = getCommonConfig(env, argv)
	const isDevelopment = commonConfig.mode === 'development'

	const styleLoader = isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader
	const cssModulesOptions = isDevelopment
		? { localIdentName: '[local]__[hash:base64:4]' }
		: { getLocalIdent: getClassNameHash }
	const cssLoader = { loader: 'css-loader', options: { modules: cssModulesOptions } }

	return merge(
		{
			entry: { main: paths.client.entry },
			plugins: [
				new HtmlPlugin({
					filename: 'index.html',
					template: 'src/client/assets/template.html',
					title: 'nest-react',
				}),
				// new UnusedWebpackPlugin({
				// 	directories: [paths.client.path, paths.common.path],
				// 	exclude: ['**/*.d.ts', '**/*.test.ts'],
				// 	root: paths.src,
				// }),
			],
			module: {
				rules: [
					{
						test: /\.m\.scss$/,
						include: paths.src,
						use: [styleLoader, '@teamsupercell/typings-for-css-modules-loader', cssLoader, 'sass-loader'],
					},
					{
						test: /\.scss$/,
						exclude: /\.m\.scss$/,
						include: paths.src,
						use: [styleLoader, 'css-loader', 'sass-loader'],
					},
					{
						test: /\.woff2$/,
						include: paths.src,
						loader: 'file-loader',
						options: { name: `[name].[ext]` },
					},
				],
			},
		},
		commonConfig,
		isDevelopment ? devConfig : prodConfig,
	)
}
