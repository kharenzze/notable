import React from 'react'
import styled from 'styled-components'
import { Node } from 'slate'

interface IElement {
  attributes: any
  element: Node
}

export enum ElementType {
  Check = 'check',
  Paragraph = 'paragraph',
}

export const Element: React.FC<IElement> = ({ attributes, element, children }) => {
  switch (element.type) {
    case ElementType.Check:
      return <ol {...attributes}>{children}</ol>
    default:
      return <Paragraph {...attributes}>{children}</Paragraph>
  }
}

const Paragraph = styled.p`
  color: ${(p) => p.theme.colors.black};
`
