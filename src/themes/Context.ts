import { createContext } from 'react'

interface SwitchThemeContextProps {
  toggleTheme: () => void
}

export const SwitchThemeContext = createContext({} as SwitchThemeContextProps)
