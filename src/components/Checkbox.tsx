import React, { FC } from 'react'
import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components'

interface ICheckbox {
  checked: boolean
  onClick: () => void
  className: string
}

interface ThemedFn extends ThemedStyledProps<ICheckbox, DefaultTheme> {}

const getColor = (p: ThemedFn) =>
  p.checked ? p.theme.colors.themePrimary : p.theme.colors.themeDarker

const Container = styled.div`
  height: 10px;
  width: 10px;
  background: ${getColor};
`

export const Checkbox: FC<ICheckbox> = ({ checked, onClick, className }) => {
  return <Container checked={checked} onClick={onClick} className={className} />
}
