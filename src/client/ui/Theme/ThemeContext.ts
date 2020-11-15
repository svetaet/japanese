import { createContext } from 'react'
import { initialTheme } from './initialTheme'

export const themes = ['light', 'dark'] as const
export type ThemeT = typeof themes[number]

export const ThemeContext = createContext({ theme: initialTheme, switchTheme: () => {} })
