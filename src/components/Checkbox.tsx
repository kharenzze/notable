import React, { FC } from 'react'
import styled from 'styled-components'
import { DefaultThemedStyledProps } from '../themes/themes'

interface ICheckbox {
  checked: boolean
  onClick: () => void
  className?: string
}

interface IContainer {
  onClick?: () => void
  className?: string
}

const getColor = (p: DefaultThemedStyledProps<IContainer>) => p.theme.colors.themeDarker
const getBorderColor = (p: DefaultThemedStyledProps<IContainer>) =>
  p.theme.colors.themePrimary

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

const getDisplayCheckmark = (p: DefaultThemedStyledProps<ICheckMark>) =>
  p.checked ? 'block' : 'none'

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
