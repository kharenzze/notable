import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Dark } from '../themes'

type ContainerProps = {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Dark}>
      <ContainerDiv>{children}</ContainerDiv>
    </ThemeProvider>
  )
}

const ContainerDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  min-height: 20px;
  border-bottom: ${(props) => {
    console.log(props)
    return 'black 2px;'
  }};
  background: red;
`
