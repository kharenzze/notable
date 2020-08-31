import styled from 'styled-components'

export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  min-height: 36px;
  padding: 0 6px;
  background: ${(props) => props.theme.colors.themeDarker};
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const NotesContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 1px;
  padding: 12px;
  background: ${(props) => props.theme.colors.themeLight};
`
