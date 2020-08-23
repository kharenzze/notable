import React, { FC, useMemo, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { Dark, Light } from './themes'
import { EmptyProps } from '../common'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, ThemeContextProps } from './Context'

const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(Dark)
  const themeContextValue: ThemeContextProps = useMemo<ThemeContextProps>(() => {
    return {
      toogleTheme: () => {
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
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
