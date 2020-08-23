import { createContext } from 'react'

export type SwitchThemeContextProps = {
  toogleTheme: () => void
}

export const SwitchThemeContext = createContext<Partial<SwitchThemeContextProps>>({})
