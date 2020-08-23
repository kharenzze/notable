import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
import { SwitchThemeContext } from './Context'

export const useSwitchThemeContext = () => useContext(SwitchThemeContext)
export const useTheme = () => useContext(ThemeContext)
