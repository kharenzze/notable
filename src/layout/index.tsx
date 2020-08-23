import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  min-height: 20px;
  background: ${(props) => props.theme.colors.neutralDark};
  border-bottom: 2px solid ${(props) => props.theme.colors.black};
`

export const NotesContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 1px;
  background: ${(props) => props.theme.colors.neutralPrimary};
`
