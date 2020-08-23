import styled from 'styled-components'

export const Container = styled.div`
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
