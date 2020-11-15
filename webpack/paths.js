const path = require('path')

const paths = {
	src: path.resolve('src'),
	client: {
		path: path.resolve('src', 'client'),
		entry: './src/client/index.tsx',
		output: path.resolve('dist', 'client'),
	},
	server: {
		path: path.resolve('src', 'server'),
		entry: './src/server/main.ts',
		output: path.resolve('dist', 'server'),
	},
	common: {
		path: path.resolve('src', 'common'),
	},
}

module.exports = { paths }
