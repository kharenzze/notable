import React from 'react'
import { CustomElement, ElementType } from './interfaces'
import { Paragraph, Check } from './elements'

interface IElement {
  attributes: any
  element: CustomElement
}

const componentByElement = {
  [ElementType.Check]: Check,
  [ElementType.Paragraph]: Paragraph,
}

export const Element: React.FC<IElement> = ({ attributes, element, children }) => {
  const Component = componentByElement[element.type]
  return <Component {...attributes}>{children}</Component>
}
