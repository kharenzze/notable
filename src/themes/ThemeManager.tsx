import React, { FC } from 'react'
import { Dark } from './themes'
import { EmptyProps } from '../common'
import { ThemeProvider } from 'styled-components'

export const ThemeManager: FC<EmptyProps> = ({ children }) => {
  return <ThemeProvider theme={Dark}>{children}</ThemeProvider>
}
