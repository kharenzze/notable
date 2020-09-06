import React, { forwardRef, ForwardRefRenderFunction, useCallback } from 'react'
import styled from 'styled-components'
import { Checkbox } from '../../components/Checkbox'
import { CustomElement } from '../interfaces'
import { ReactEditor, useEditor } from 'slate-react'
import { Transforms } from 'slate'
import { DefaultThemedStyledProps } from '../../themes/themes'
import { Node } from 'slate'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

interface ICheckText {
  checked: boolean
}

const getTextDecoration = (p: DefaultThemedStyledProps<ICheckText>) =>
  p.checked ? 'line-through' : 'none'

const CheckText = styled.span.attrs({
  contentEditable: true,
})`
  color: ${(p) => p.theme.colors.black};
  text-decoration: ${getTextDecoration};
  &:focus {
    outline: none;
  }
`

export interface ICheckElement extends CustomElement {
  checked?: boolean
}

interface ICheck {
  element: Node
}

const SCheckbox = styled(Checkbox)`
  margin: 3px 12px 0 0;
`

const Check_: ForwardRefRenderFunction<HTMLDivElement, ICheck> = (
  { children, element, ...rest },
  ref
) => {
  const cElement = element as ICheckElement
  const editor = useEditor()
  const onClick = useCallback(() => {
    const path = ReactEditor.findPath(editor, element)
    const { checked } = element
    Transforms.setNodes(editor, { checked: !checked }, { at: path })
  }, [editor, element])
  const { checked = false } = cElement
  return (
    <Container ref={ref}>
      <SCheckbox checked={checked} onClick={onClick} />
      <CheckText checked={checked} suppressContentEditableWarning>
        {children}
      </CheckText>
    </Container>
  )
}

export const Check = forwardRef(Check_)
