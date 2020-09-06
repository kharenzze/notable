import { Element } from 'slate'

export enum ElementType {
  Check = 'check',
  Paragraph = 'paragraph',
}

export interface CustomElement extends Element {
  type?: ElementType
}
