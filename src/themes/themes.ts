import { DefaultTheme } from 'styled-components'

export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
}

const Dark: DefaultTheme = {
  colors: {
    themePrimary: '#8d7ec4',
    themeLighterAlt: '#060508',
    themeLighter: '#17141f',
    themeLight: '#2a263b',
    themeTertiary: '#554b76',
    themeSecondary: '#7c6fad',
    themeDarkAlt: '#9789ca',
    themeDark: '#a599d2',
    themeDarker: '#bbb1de',
    neutralLighterAlt: '#282828',
    neutralLighter: '#313131',
    neutralLight: '#3f3f3f',
    neutralQuaternaryAlt: '#484848',
    neutralQuaternary: '#4f4f4f',
    neutralTertiaryAlt: '#6d6d6d',
    neutralTertiary: '#e0e0e0',
    neutralSecondary: '#e5e5e5',
    neutralPrimaryAlt: '#eaeaea',
    neutralPrimary: '#d1d1d1',
    neutralDark: '#f4f4f4',
    black: '#f9f9f9',
    white: '#1f1f1f',
  },
}

const Light: DefaultTheme = {
  colors: {
    themePrimary: '#4d4dd1',
    themeLighterAlt: '#f7f7fd',
    themeLighter: '#dfdff8',
    themeLight: '#c4c4f1',
    themeTertiary: '#8d8de3',
    themeSecondary: '#6060d7',
    themeDarkAlt: '#4646bc',
    themeDark: '#3b3b9f',
    themeDarker: '#2b2b75',
    neutralLighterAlt: '#ecedf1',
    neutralLighter: '#e8e9ed',
    neutralLight: '#dfe0e3',
    neutralQuaternaryAlt: '#cfd1d3',
    neutralQuaternary: '#c6c7ca',
    neutralTertiaryAlt: '#bebfc2',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#f2f4f7',
  },
}

export const Themes = {
  [ThemeType.Dark]: Dark,
  [ThemeType.Light]: Light,
}
