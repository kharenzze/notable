import React from 'react'
import styled from 'styled-components'
import { Node } from 'slate'

interface IElement {
  attributes: any
  element: Node
}

export const Element: React.FC<IElement> = ({ attributes, element, children }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <Paragraph {...attributes}>{children}</Paragraph>
  }
}

const Paragraph = styled.p`
  color: ${(p) => p.theme.colors.black};
`
