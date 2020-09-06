import React, { FC } from 'react'
import styled from 'styled-components'
import { ThemeToggle } from './components/ThemeToggle'
import { LoadingDots } from './components/LoadingDots'

const Container = styled.div`
  min-height: 36px;
  padding: 0 6px;
  background: ${(props) => props.theme.colors.themeDarker};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Loading = styled(LoadingDots)`
  height: 30px;
  min-height: 30px;
  width: 30px;
  min-width: 30px;
`

interface IAppTopBar {
  saving: boolean
}

export const TopBar: FC<IAppTopBar> = ({ saving }) => {
  return (
    <Container>
      <ThemeToggle />
      <Loading />
    </Container>
  )
}
