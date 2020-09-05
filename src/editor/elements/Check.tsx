import React, { FC } from 'react'
import styled from 'styled-components'

const CheckText = styled.p`
  color: ${(p) => p.theme.colors.black};
`

export const Check: FC = ({ children, ...rest }) => {
  return <CheckText>{children}</CheckText>
}
