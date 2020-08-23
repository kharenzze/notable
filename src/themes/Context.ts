import { createContext } from 'react'

export type ThemeContextProps = {
  toogleTheme: () => void
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({})
