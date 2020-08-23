import { createContext } from 'react'

export interface SwitchThemeContextProps {
  toggleTheme: () => void
}

export const SwitchThemeContext = createContext({} as SwitchThemeContextProps)
