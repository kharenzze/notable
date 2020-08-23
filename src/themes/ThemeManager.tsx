import React, { FC } from 'react'
import { Dark } from './themes'
import { EmptyProps } from '../common'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './Context'

export const ThemeManager: FC<EmptyProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <ThemeProvider theme={Dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
