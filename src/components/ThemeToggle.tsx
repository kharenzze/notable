import React, { FC } from 'react'
import { Toggle } from './Toggle'
import { EmptyProps } from '../common'
import { useSwitchThemeContext, useTheme } from '../themes/hooks'
import { Light } from '../themes/themes'

export const ThemeToogle: FC<EmptyProps> = () => {
  const theme = useTheme()
  const { toggleTheme } = useSwitchThemeContext()
  const isLight = theme === Light
  return <Toggle onChange={toggleTheme} checked={isLight} />
}
