import React, { FC, useMemo, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Themes, ThemeType } from './themes'
import { EmptyProps } from '../common'
import { SwitchThemeContext, SwitchThemeContextProps } from './Context'
import { Options } from '../Options'

const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const themeType = Options.getTheme()
    return Themes[themeType]
  })
  const themeContextValue: SwitchThemeContextProps = useMemo(() => {
    return {
      toggleTheme: () => {
        setTheme((t) => {
          const isDark = t === Themes[ThemeType.Dark]
          const nextType = isDark ? ThemeType.Light : ThemeType.Dark
          Options.setTheme(nextType)
          return Themes[nextType]
        })
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
