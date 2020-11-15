import { getCookie } from 'utils'
import { ThemeT } from './ThemeContext'

export const initialTheme = getCookie<ThemeT>('theme') || 'dark'
