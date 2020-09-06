import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const NotesContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 1px;
  padding: 12px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.themeLight};
  overflow-x: scroll;
`
