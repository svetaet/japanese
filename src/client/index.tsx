import { hot } from 'react-hot-loader/root'
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

import { DEV_MODE } from 'common/constants'
import { ThemeProvider } from 'ui/Theme'
import { SearchProvider } from 'ui/SearchState'
import { App } from 'App'
import { root } from 'root'

const Root = DEV_MODE ? hot(App) : App
render(
	<ThemeProvider>
		<SearchProvider>
			<Root />
		</SearchProvider>
	</ThemeProvider>,
	root,
)
