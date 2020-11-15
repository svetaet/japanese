import React, { FC, ReactNode, useState, useCallback, useMemo, memo } from 'react'
import { setCookie } from 'client/utils'

import { initialTheme } from './initialTheme'
import { ThemeContext, ThemeT } from './ThemeContext'

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeT>(initialTheme)
	const switchTheme = useCallback(() => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		setTimeout(() => setCookie('theme', newTheme))
	}, [theme])
	const value = useMemo(() => ({ theme, switchTheme }), [theme, switchTheme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const MemoThemeProvider = memo(ThemeProvider)
export { MemoThemeProvider as ThemeProvider }
