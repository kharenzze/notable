import React from 'react'
import { CustomElement, ElementType } from './elements/interfaces'
import { Paragraph } from './elements/Paragraph'
import { Check } from './elements/Check'

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
