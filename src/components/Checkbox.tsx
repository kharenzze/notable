import React, { FC } from 'react'
import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components'

interface ICheckbox {
  checked: boolean
  onClick: () => void
  className?: string
}

interface IContainer {
  onClick?: () => void
  className?: string
}

interface IThemedContainer extends ThemedStyledProps<IContainer, DefaultTheme> {}

const getColor = (p: IThemedContainer) => p.theme.colors.themeDarker
const getBorderColor = (p: IThemedContainer) => p.theme.colors.themePrimary

const Container = styled.div`
  height: 14px;
  width: 14px;
  background: transparent;
  border: 2px solid ${getBorderColor};
  position: relative;
  color: ${getColor};
`

interface ICheckMark {
  checked: boolean
}

interface IThemedCheckmark extends ThemedStyledProps<ICheckMark, DefaultTheme> {}

const getDisplayCheckmark = (p: IThemedCheckmark) => (p.checked ? 'block' : 'none')

const CheckMark = styled.span`
  display: ${getDisplayCheckmark};
  position: absolute;
  top: -12px;
  font-weight: bolder;
  font-size: 26px;
`

export const Checkbox: FC<ICheckbox> = ({ checked, onClick, className = '' }) => {
  return (
    <Container onClick={onClick} className={className}>
      <CheckMark checked={checked}>&#x2713;</CheckMark>
    </Container>
  )
}
