import React, { FC } from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components/Checkbox'

const Container = styled.div.attrs({
  contentEditable: false,
})`
  display: flex;
  flex-direction: row;
`

const CheckText = styled.span`
  color: ${(p) => p.theme.colors.black};
`

export const Check: FC = ({ children, ...rest }) => {
  return (
    <Container>
      <Checkbox checked={true} />
      <CheckText>{children}</CheckText>
    </Container>
  )
}
