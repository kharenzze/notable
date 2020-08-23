import React, { FC, useMemo, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { Dark, Light } from './themes'
import { EmptyProps } from '../common'
import { ThemeProvider } from 'styled-components'
import { SwitchThemeContext, SwitchThemeContextProps } from './Context'

const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(Dark)
  const themeContextValue: SwitchThemeContextProps = useMemo(() => {
    return {
      toggleTheme: () => {
        setTheme((t) => (t === Dark ? Light : Dark))
      },
    }
  }, [setTheme])

  return {
    theme,
    themeContextValue,
  }
}

export const ThemeManager: FC<EmptyProps> = ({ children }) => {
  const { theme, themeContextValue } = useTheme()
  return (
    <SwitchThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
