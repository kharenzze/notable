import styled from 'styled-components'
import ReactToggle from 'react-toggle'
import 'react-toggle/style.css'

export const Toggle = styled(ReactToggle).attrs({
  icons: false,
})`
  &.react-toggle--checked .react-toggle-track {
    background: ${(props) => props.theme.colors.neutralLighter};
  }
  &.react-toggle--checked:hover .react-toggle-track {
    background: ${(props) => props.theme.colors.neutralLight};
  }
  &.react-toggle .react-toggle-track {
    background: ${(props) => props.theme.colors.neutralLighter};
  }
  &.react-toggle:hover .react-toggle-track {
    background: ${(props) => props.theme.colors.neutralLight};
  }
`
