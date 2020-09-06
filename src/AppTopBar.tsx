import React, { FC } from 'react'
import styled from 'styled-components'
import { ThemeToggle } from './components/ThemeToggle'

const Container = styled.div`
  min-height: 36px;
  padding: 0 6px;
  background: ${(props) => props.theme.colors.themeDarker};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

interface IAppTopBar {
  saving: boolean
}

export const TopBar: FC<IAppTopBar> = ({ saving }) => {
  return (
    <Container>
      <ThemeToggle />
    </Container>
  )
}
