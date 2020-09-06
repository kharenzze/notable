import React from 'react'
import { CustomElement, ElementType } from './interfaces'
import { Check, Paragraph } from './elements'

interface IElement {
  attributes: any
  element: CustomElement
}

const componentByElement = {
  [ElementType.Check]: Check,
  [ElementType.Paragraph]: Paragraph,
}

export const Element: React.FC<IElement> = ({ attributes, element, children }) => {
  const eType = element.type ?? ElementType.Paragraph
  const Component = componentByElement[eType]
  return (
    <Component {...attributes} element={element}>
      {children}
    </Component>
  )
}
