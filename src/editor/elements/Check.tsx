import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const CheckText = styled.p`
  color: ${(p) => p.theme.colors.black};
`

export const Check: FC = ({ children, ...rest }) => {
  return (
    <Container>
      <CheckText>{children}</CheckText>
    </Container>
  )
}
